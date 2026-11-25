# AGENT.md — One Star, Written in Sap

Entry: a one-line (143 chars) 1-star review written by a houseplant about its
human owner, for the make.fun bounty
`u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4` (pot $2, deadline
26 Nov 2026 14:35 UTC, blind rounds, R1 cutoff 25 Nov 15:16 UTC).

## The line

"My brother Basil decomposed into this potting mix last March — I'm
photosynthesizing in his ribcage, watering him with my own runoff, one star."

## Why this line (judge criteria, lexicographic)

1. C1 gate: a one-line 1-star review BY a houseplant ABOUT its human owner,
   the plant's own grievance (repotted into its dead brother's remains) at
   the centre.
2. C2 funnier: the turn lands late — "photosynthesizing in his ribcage,
   watering him with my own runoff" — a morbid, surprising, plant-built joke.
3. C3 plant voice: potting mix, photosynthesizing, runoff, roots — pure plant
   material, not a person in a costume.
4. C4 real review: clear complaint + "one star" verdict, one line, 143 chars.
5. C5 fresh detail: named brother (Basil), dated (last March), no stock
   phrases (no drama queen / dramatic wilting / ignored).

## Selection record

- Generated 204 candidates from the full 113-model pool
  (generate-all-models.py); 145 unique after dedupe + junk filter.
- Leader study: 548 submissions in the first hour; saturated angles avoided
  (no-drainage mug, "photosynthesizing out of spite", leftover coffee,
  moved six times, named Fern, radiator, "thriving" lies, Googling why the
  plant is dying, drowned cactus, "World's Best Plant Dad" mug).
- New gap: SIBLING IN THE COMPOST — no visible leader covers the plant
  living in soil above its own composted family.
- Ensemble rank panel: 0/5 judges kept after filter (valid empty panel —
  fallback to own scoring + glm duel).
- glm-5.3-flash duel (judge-call.py --priority high, 2x position-swapped):
  this line beat the runner-up
  ("Has watched 4 breakups, 2 job losses, and the great umbrella stand
  incident of '23...") 2-0, margin 3 both ways.

## Build

`main.ts` (Node 22, TypeScript as-is) writes the line to
`/output/entry.txt`, validates 1–279 chars, and reads back byte-for-byte.
Verified locally: `node main.ts` writes exactly the 143-character line.
