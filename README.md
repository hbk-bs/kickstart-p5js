# Kickstart with p5.js

This is the Template Repl for p5.js to hit the floor running

p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else! p5.js is free and open-source because we believe software, and the tools to learn it, should be accessible to everyone.

[Check out the official docs here](https://p5js.org/reference/).

## Pre-requisites

- Node.js (best installed using https://nvm.sh)

## Features

- Has Types for p5.js installed and linked in sketch.js this allows TypeScript to check your code
- Has a reloading dev server that runs on http://localhost:8080. Just run `npm run dev`
- Has Prettier installed for formatting your code. Just run `npm run prettier`
- Has Eslint installed to find errors in your code. Just run `npm run lint`
- Has the canvas centered in the page using CSS Flexbox
- Uses local version of p5.js in node_modules/ but also has link to CDN in `index.html`

## Usage Locally

- Clone the repo `git clone git@github.com:hbk-bs/kickstart-p5js.git <YOUR NEW PROJECT NAME> && cd <YOUR NEW PROJECT NAME>`
- Or `degit` it `mkdir <YOUR NEW PROJECT NAME> && cd <YOUR NEW PROJECT NAME> && npx degit hbk-bs/kickstart-p5js`
- Or [download](https://github.com/hbk-bs/kickstart-p5js/archive/refs/heads/main.zip) the latest version from GitHub and unzip it. Start a new Terminal session and move into the folder
- Use the defined Node.js version `nvm install`
- Install the used modules `npm ci`
- Start your dev server `npm run dev`
- Edit `sketch.js`, `index.html` or `style.css`

## Usage in Repl.it

- Just create a copy (or fork) of the repl and run it
- Edit `sketch.js`, `index.html` or `style.css`
