export async function GET(request: Request) {
  try {
    const response = await fetch('https://api.vercel.app/products');
    
    if (!response.ok) {
      return Response.json(
        { error: `Failed to fetch products: ${response.statusText}` },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    
    return Response.json(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return Response.json(
      { error: `Failed to fetch data: ${errorMessage}` },
      { status: 500 }
    );
  }
}
