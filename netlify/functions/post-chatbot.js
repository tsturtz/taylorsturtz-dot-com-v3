export default async (req, context) => {
    const accessToken = process.env.HUGGINGFACE_ACCESS_TOKEN;
    const { prompt } = await req.json();

    // Check if the access token is available.
    if (!accessToken) {
        return new Response(JSON.stringify({
            error: "Server configuration error: Access token missing."
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        // Fetch
        const response = await fetch(
            'https://tsturtz-portfolio-chatbot.hf.space/prompt',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({ prompt })
            }
        );

        // Handle errors
        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`API returned status ${response.status}: ${errorDetails}`);
        }

        const data = await response.json();
        console.log('API response data:', data);

        // Return the data
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Error in function:', error);
        return new Response(JSON.stringify({
            error: "An error occurred while processing your request.",
            details: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
