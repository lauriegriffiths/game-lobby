import { error } from '@sveltejs/kit';
import type { RouteParams, PageLoad } from './$types';
import { supabaseClient } from '$lib/db';

export const load = (async ({ params }) => {
	const res = await supabaseClient.from('game').select().eq('code', params.slug.toUpperCase());

	console.log(res);
	if (res.data.length > 0) {
		if (params.slug) {
			return {
				slug: params.slug.toUpperCase()
			};
		}
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
