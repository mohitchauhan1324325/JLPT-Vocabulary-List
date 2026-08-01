# JLPT Vocab

![Node.js](https://img.shields.io/badge/Node-18%2B-green?logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%F0%9F%8C%8A-47A248) ![Express](https://img.shields.io/badge/Express-4.x-black?logo=express&logoColor=white) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

A polished JLPT vocabulary study application (client + API) that stores JLPT-level words and user progress in MongoDB. This repository is structured to be developer-friendly and ready for local development or deployment.

## Table of contents
- Quick demo
- Tech stack
- Project structure
- Features
- Getting started
- Environment & seeding
- Running the app
- API reference
- Contributing
- License & acknowledgements

## Quick demo
Start the server and client locally to try the app. See "Getting started" for commands.

## Tech stack
- Frontend: React 18 + Vite
- Backend: Node.js + Express
- Database: MongoDB (Mongoose ODM)
- Tooling: nodemon (dev), concurrently

## Project structure
```
jlpt_vocab/
├─ client/                # React + Vite frontend
│  ├─ index.html
│  ├─ package.json
│  └─ src/                # React components, pages, api wrappers
├─ server/                # Express API server
│  ├─ data/               # seed/data files (server/data/seed.js)
│  ├─ models/             # Mongoose models (Vocab, Progress)
│  ├─ routes/             # API routes (vocab.js, progress.js)
│  ├─ middleware/         # error handlers
│  ├─ server.js           # app entry
│  └─ package.json
├─ package.json           # root scripts (dev, seed, install:all)
└─ README.md
```

## Features
- Organized JLPT vocabulary by level (N5, N4, ...)
- Seed script to populate MongoDB with example vocabulary and example sentences
- Simple progress tracking model for quiz/flashcard modes
- Clean React components for study modes (flashcards, quiz, search, stats)

## Getting started

### Prerequisites
- Node.js (18+ recommended)
- npm (or yarn)
- MongoDB (local or Atlas)

### Install dependencies for both parts:
```bash
npm run install:all
```

### Create the server environment file `server/.env` with the minimum variables:
```
MONGO_URI=<your-mongo-connection-string>
PORT=5000
```

## Seeding the database
Seed the database with the bundled JLPT vocabulary (optional but recommended):
```bash
npm run seed
# runs: cd server && node data/seed.js
```

Notes
- The seed script (`server/data/seed.js`) populates the `Vocab` collection. It requires a reachable MongoDB specified by `MONGO_URI`.

## Run the app
Run both client and server in development (root):
```bash
npm run dev
```

Run server only:
```bash
cd server
npm run dev
# or `npm start` to run without nodemon
```

Run client only:
```bash
cd client
npm run dev
```

## API reference
The server exposes simple routes under `server/routes`. Typical endpoints include:
- `GET /api/vocab` — list or query vocabulary
- `GET /api/vocab/:id` — retrieve a single vocab entry
- `POST /api/progress` — record user progress (see `server/models/Progress.js`)

Open the server port configured in `server/.env` (default `5000`) to access the API.

## Customization & extending data
- Add more vocabulary to the appropriate JLPT level inside `server/data/seed.js`.
- Keep example sentences simple and include furigana as needed for kanji.

## Contributing
- Fork and open a PR for additions or bug fixes.
- Keep changes small and focused: new entries should update `server/data/seed.js` and any related tests.

## License
MIT

## Acknowledgements
- Built with React, Vite, Express, and MongoDB.
- Badges via shields.io

## Contact
If you want help improving the README or adding CI, tests, or deployment instructions, tell me what you'd like next and I can implement it.
"# JLPT-Vocabulary-List" 
