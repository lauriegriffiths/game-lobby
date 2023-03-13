# Game Lobby Example

This is presented as is! It was hacked together for a game jam. It's a quick Jackbox Style game lobby.

To use, set up a supabase project with a `game` that has a `code` column and a `player` table with a `game_code` column and a `name` column.  

Make a `.env` file and add your `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` from the supabase.com dashboard.

## Supabase Rest example

```
curl '<SUPABASE_URL>/rest/v1/todos' \
-H "apikey: <SUPABASE_ANON_KEY>" \
-H "Authorization: Bearer <SUPABASE_ANON_KEY>"
```

