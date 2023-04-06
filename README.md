# Game Lobby Example

This code was created as a template for others to use at a game jam. It's a quick Jackbox Style game lobby. Players can make a new game, enter their own name, wait for other players and then start the game when ready.

There are some small touches that improve the UX: All changes are handled using realtime features via websockets, so players can view other players entering the game lobby in realtime.  Also, the game stores entered information in the browser's local storage so accidentally browser windows closes etc don't kick you out of the game.

The is no actual game in this source code!  That was the challenge for attendees at the game jam.

## Setup

To use, set up a supabase project with a `game` that has a `code` column and a `player` table with a `game_code` column and a `name` column.  

Make a `.env` file and add your `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` from the supabase.com dashboard.
