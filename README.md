# The Quiet Kind

A story-driven, choice-based 2.5D pixel game in the browser: a quiet boy from Larkspur, told in a prologue and fifteen chapters,
with seven endings.

## Play
Open `index.html` in Chrome, Edge, Firefox or Safari (desktop or phone). No install, no internet needed.
For phones, host the folder on any static host (itch.io HTML upload, GitHub Pages, Netlify) and open the link; play in landscape.

## How it plays (Genshin-style story quests)
- The **quest tracker** (top-left, under the round minimap) says where to go and what to do. The **gold diamond** marks the spot and
  shows the distance; at the screen edge it turns into an arrow. Click/tap the tracker (or **Navigate** in the quest log) and Eli walks there himself.
- Walk up to the quest character and press **F** (or the big F button) to **Talk**. The camera moves in, the letterbox bars close, and the scene plays.
  The name plate shows who is speaking **to whom** (e.g. `Ma ▸ Eli`). **Auto**, **Skip** and **Log** are top-right during dialogue.
- **Choices** appear on the right. Some can't be said yet (🔒), some your nerve fails on, and silence is sometimes a choice too (it times out).
- After important scenes you write one line in **Eli's diary**. Choices and diary lines shape seven endings.
- Letters, telegrams and newspaper cuttings open as paper you can read. **Keepsakes** go in the tin box (B).
- Explore between quests: 12 **loose pages** are hidden around the valley, animals to pet, stones to skip, a well, a campfire, townsfolk to talk to.
- **Map** (M): fast travel to places you've visited while a quest is active.

Controls: WASD/arrows walk · Shift run · F interact · mouse wheel/Tab choose between prompts · click the map to walk ·
Space/click advance · 1–9 choose · J quests · M map · B keepsakes · Esc menu.  On phones: joystick, F button, Run toggle, tap to advance.

## Files
- `index.html`, `css/game.css`: UI
- `js/world.js`: map renderer, lighting, 8px collision grid + A* pathfinding, NPCs, dialogue camera, minimap/map, rides, touch input
- `js/quest.js`: story director (quests, dialogue, choices, diary, saves, endings, menus)
- `data/story.json` (+ `story-data.js`, same data for file:// use): the whole script
- `assets/`: map, cast, music, fonts (see `assets/CREDITS.md`)

## Testing
`index.html?autoplay=present&speed=10` lets a bot play the whole game with real walking and print the ending in the console
(also `room`, `kindno`, `cure`, `stone`, `autopilot`, `unsaid`). Add `&jump=c8b` to start at a scene.
