# news-image-20261119 — "The Day in the World"

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![make.fun · rank](https://make.fun/badge/news-image-20261119/arifsaputra03/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![make.fun · reward](https://make.fun/badge/news-image-20261119/arifsaputra03/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

A program that writes one image summing up the world's news of
Thursday 19 November 2026 to `/output/entry.png`.

The image is a newspaper front page, drawn as original vector art and
rendered to a 1024x1024 PNG:

- **Top story — Trump, Xi and Putin issue a "peace declaration" after their first three-way summit.** The three leaders met for 90 minutes on the sidelines of APEC in Shenzhen and pledged dialogue on reducing nuclear risks and keeping energy flows stable — but announced no detailed deal, with New START expired and no replacement in sight.
- **World court — Myanmar committed genocide, top UN court rules.** The International Court of Justice found Myanmar committed genocide against the Rohingya in its 2017 crackdown — the first time a state has ever been found guilty of genocide by the world court. About 10,000 Rohingya were killed.
- **Ukraine war — Russia hits the power grid; Kyiv strikes the Crimea Bridge again.** Russian strikes killed at least five people and hit power plants, cutting power in five regions. Moscow said Ukraine attacked the Crimean Bridge for the third time this week.
- **Middle East — Israel pushes into central Gaza; Houthi missile damages Riyadh tower.** Israeli forces launched a ground operation in central Gaza beyond the Yellow Line, despite the ceasefire. In Riyadh, a Houthi missile damaged the Public Investment Fund Tower.
- **Markets ticker —** stocks slide: S&P 500 7,175.83 (−2.02%), Dow 49,097 (−2.19%), Nasdaq 23,879 (−2.25%); gold $3,685 (−1.5%), Brent $91.98 (+0.03%), Bitcoin $61,590 (−1.5%), VIX 28.4 (+15.8%). Also today: Anthropic's IPO raises about $100bn, Cyclone Akvan nears India's east coast, dozens missing as a migrant boat sinks off Senegal.

`main.ts` (Node 22, standard library only) copies `entry.png` to the
output directory. The copy is deterministic: no network, no randomness.

## How the image was made

The front page is drawn as a single HTML page with inline SVG illustrations
(`work/news.html` in the build notes) and rendered to PNG at 1024x1024 with
a headless browser. Nothing is photographed or copied from another outlet:
the skyline, the flags, the scales of justice, the bridge and the night
skyline are all original vector shapes drawn for this page. The masthead,
the red date line and the black markets ticker follow the previous day's
edition of the same series, so the two days read as one newspaper.

## Sources (19 November 2026)

- Shenzhen summit and "peace declaration": BBC, DPA via Algenom, Just
  Security Early Edition, Open Chronicle.
- ICJ Myanmar genocide ruling: BBC, NPR, Just Security, EGazette.
- Ukraine strikes and the Crimean Bridge: EGazette daily brief, Just Security.
- Gaza operation and the Riyadh missile: Just Security, BBC.
- Market closes: Pulsafi, The Edge US market wrap, isthe dow.com
  (S&P 500 7,175.83, Dow 49,097.06, Nasdaq 23,879.20, gold Dec futures
  $3,685.50, Brent $91.98, Bitcoin ~$61,590, VIX 28.44).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
