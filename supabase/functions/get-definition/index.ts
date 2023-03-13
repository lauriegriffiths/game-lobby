// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.131.0/http/server.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';

export const corsHeaders = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

serve(async (req) => {
	if (req.method === 'OPTIONS') {
		return new Response('ok', {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST',
				'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
				'Access-Control-Allow-Headers':
					'apikey,X-Client-Info, Content-Type, Authorization, Accept, Accept-Language, X-Authorization'
			}
		});
	} else {
		const { word, sentence } = await req.json();
		const prompt = `Give a easy English definition of the word ${word} in this sentence:\n ${sentence}`;

		let definition = 'hello';
		const response = await axiod.post(
			'https://api.openai.com/v1/completions',
			{
				model: 'text-davinci-003',
				prompt: prompt,
				max_tokens: 25,
				temperature: 0.1
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + Deno.env.get('OPENAI_API_KEY')
				}
			}
		);

		console.log(response);
		definition = response.data.choices[0].text;

		const data = {
			definition: definition
		};

		return new Response(JSON.stringify(data), { headers: corsHeaders });
	}
});
