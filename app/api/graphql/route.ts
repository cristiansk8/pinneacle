import { NextRequest, NextResponse } from 'next/server';

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_WOOCOMMERCE_URL
  ? `${process.env.NEXT_PUBLIC_WOOCOMMERCE_URL}/graphql`
  : '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('GraphQL Proxy error:', error);
    return NextResponse.json(
      { errors: [{ message: 'Error en el proxy GraphQL' }] },
      { status: 500 }
    );
  }
}

// Soportar OPTIONS para CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
