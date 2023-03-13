// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
// import {
// 	PollyClient,
// 	SynthesizeSpeechCommand
// } from 'https://deno.land/x/aws_sdk@v3.32.0-1/client-polly/mod.ts';

import {
	PollyClient,
	SynthesizeSpeechCommand
} from 'https://deno.land/x/aws_sdk@v3.32.0-1/client-polly/mod.ts';

const client = PollyClient({
	region: 'ap-northeast-1'
});

import { fromEnv } from 'https://deno.land/x/aws_sdk@v3.32.0-1/credential-providers/mod.ts';
//import { fromEnv } from 'https://esm.sh/aws-sdk/credential-providers';

//const client = new PollyClient({ credentials: fromEnv(), region: 'ap-northeast-1' });

serve(async (req) => {
	const { phrase } = await req.json();
	const data = {
		message: `Hello ${phrase}!`
	};
	console.log('running speech synthesis');

	var params = {
		LexiconNames: ['example'],
		OutputFormat: 'mp3',
		SampleRate: '8000',
		Text: phrase,
		TextType: 'text',
		VoiceId: 'Arthur'
	};

	client.synthesizeSpeech(params, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data); // successful response
	});

	return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
