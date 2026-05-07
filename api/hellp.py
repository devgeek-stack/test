# File: api/hello.py

def handler(request):
    # Vercel passes in a request object
    # You can access query params, headers, etc.
    name = request.args.get("name", "World")
    
    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": {
            "message": f"Hello, {name} from Vercel + Python!"
        }
    }
