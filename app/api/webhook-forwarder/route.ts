import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const { url, data } = await request.json();

    if (!url || !data) {
      return NextResponse.json(
        { error: 'URL and data are required' },
        { status: 400 }
      );
    }

    // Forward the request to the specified webhook URL
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Get the response from the webhook
    const responseData = await response.text();

    // Check if the webhook request was successful
    if (!response.ok) {
      console.error(`Webhook error: ${response.status} ${response.statusText}`);
      console.error('Response body:', responseData);
      
      return NextResponse.json(
        { 
          error: 'Webhook request failed', 
          status: response.status,
          statusText: response.statusText,
          body: responseData
        },
        { status: 502 } // Bad Gateway
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      status: response.status,
      webhook_response: responseData
    });
  } catch (error) {
    // Log the error for debugging
    console.error('Error in webhook-forwarder:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
