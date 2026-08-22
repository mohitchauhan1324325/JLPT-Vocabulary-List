# JLPT Vocab

![Node.js 18+](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white) ![React 18](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=111827) ![Vite 5](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white) ![Express 4](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248?logo=mongodb&logoColor=white) ![License MIT](https://img.shields.io/badge/License-MIT-F0C808)

A full-stack JLPT vocabulary study tool. Browse Japanese words, search and filter by level or part of speech, study with flashcards, take quizzes, and keep favorites and mastered words across sessions.

## Contents

- [Tech stack](#tech-stack)
- [Features](#features)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [API reference](#api-reference)
- [Adding vocabulary](#adding-vocabulary)

## Tech stack

The project uses the following technologies. The logos below are loaded from Simple Icons so the stack is visible at a glance in GitHub and other Markdown viewers.

<p>
	<img src="https://cdn.simpleicons.org/react/61DAFB" width="52" height="52" alt="React" title="React" />
	<img src="https://cdn.simpleicons.org/vite/646CFF" width="52" height="52" alt="Vite" title="Vite" />
	<img src="https://cdn.simpleicons.org/nodedotjs/339933" width="52" height="52" alt="Node.js" title="Node.js" />
	<img src="https://cdn.simpleicons.org/express/000000" width="52" height="52" alt="Express" title="Express" />
	<img src="https://cdn.simpleicons.org/mongodb/47A248" width="52" height="52" alt="MongoDB" title="MongoDB" />
	<img src="https://cdn.simpleicons.org/mongoose/880000" width="52" height="52" alt="Mongoose" title="Mongoose" />
	<img src="https://cdn.simpleicons.org/axios/5A29E4" width="52" height="52" alt="Axios" title="Axios" />
	<img src="https://cdn.simpleicons.org/npm/CB3837" width="52" height="52" alt="npm" title="npm" />
</p>

| Layer | Technologies |
| --- | --- |
| Client | React 18.3, React DOM, Vite 5.3 |
| API | Node.js, Express 4.19, CORS, dotenv |
| Persistence | MongoDB with Mongoose 8.5 |
| Client HTTP | Axios |
| Development | Vite HMR, Nodemon, Concurrently |

## Features

- Vocabulary list with Japanese sorting, pagination, and empty/loading states.
- JLPT level navigation for N1 through N5 and part-of-speech filtering.
- Search across kanji, kana, romaji, and English meaning.
- Flashcard mode with furigana, example sentences, speech support, favorites, and mastered status.
- Quiz mode with persistent correct and total answer counts.
- Per-browser progress identified by a UUID stored in `localStorage`.
- MongoDB seed script. The bundled dataset currently seeds N5 entries; the schema supports N1-N5.
- Responsive client served by Vite and connected to the API through a development proxy.

## Project structure

```text
jlpt_vocab/
├─ client/
│  ├─ src/
│  │  ├─ api/             # Axios API client and session header
│  │  ├─ components/      # Header, filters, cards, flashcards, quiz, stats
│  │  ├─ context/         # Application state and API-backed progress actions
│  │  ├─ pages/           # Home page
│  │  └─ utils/           # Furigana, quiz, and speech helpers
│  ├─ package.json
│  └─ vite.config.js       # Vite server and /api proxy
├─ server/
│  ├─ data/               # N5 vocabulary and seed script
│  ├─ middleware/         # Error handler
│  ├─ models/             # Vocab and Progress Mongoose models
│  ├─ routes/             # Vocabulary and progress endpoints
│  ├─ package.json
│  └─ server.js           # Express entry point
├─ package.json           # Root development scripts
└─ README.md
```

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm
- A running MongoDB instance or MongoDB Atlas database

### Install

From the repository root:

```bash
npm run install:all
```

Create `server/.env`:

```dotenv
MONGO_URI=mongodb://127.0.0.1:27017/jlpt_vocab
PORT=5000
# Optional when the client is hosted separately:
# CLIENT_URL=http://localhost:5173
```

The client uses `/api` by default, which Vite proxies to `http://localhost:5000`. To point it at another API, create `client/.env` with:

```dotenv
VITE_API_URL=https://your-api.example.com/api
```

### Seed the database

The seed command clears the `Vocab` collection before inserting the bundled N5 dataset. Run it only against the database intended for development:

```bash
npm run seed
```

### Run in development

Start both services from the repository root:

```bash
npm run dev
```

The client is available at `http://localhost:5173`. The API listens on `http://localhost:5000` by default.

To run one service separately:

```bash
cd server && npm run dev
cd client && npm run dev
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run install:all` | Install server and client dependencies |
| `npm run dev` | Run the API and client concurrently |
| `npm run server` | Run the server in development mode |
| `npm run client` | Run the Vite client |
| `npm run seed` | Clear and seed the vocabulary collection |
| `cd server && npm start` | Run the API without Nodemon |
| `cd client && npm run build` | Create a production client build |
| `cd client && npm run preview` | Preview the production client build |

## API reference

All progress routes use the `x-session-id` header. The client creates and stores this ID automatically.

### Vocabulary

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/vocab` | Paginated vocabulary list |
| `GET` | `/api/vocab?level=N5&type=noun&search=学校&page=1&limit=20` | Filter and search vocabulary |
| `GET` | `/api/vocab?all=true` | Return all matching words for study modes |
| `GET` | `/api/vocab/levels` | Return vocabulary counts grouped by level |
| `GET` | `/api/vocab/:level` | Return all words for an exact N1-N5 level |

### Progress

| Method | Endpoint | Body | Description |
| --- | --- | --- | --- |
| `GET` | `/api/progress` | - | Get or create session progress |
| `PUT` | `/api/progress/favorite` | `{ "key": "kanji+kana" }` | Toggle a favorite word |
| `PUT` | `/api/progress/mastered` | `{ "key": "kanji+kana" }` | Toggle mastered status |
| `PUT` | `/api/progress/quiz` | `{ "correct": true }` | Increment quiz totals and optionally correct answers |
| `DELETE` | `/api/progress/reset` | - | Reset favorites, mastered words, and quiz score |

### Health check

```text
GET /api/health
```

Returns `{ "status": "ok" }` when the API is running.

## Adding vocabulary

Add entries to `server/data/n5_vocab.js`, or add another level dataset and register it in `server/data/seed.js` under `vocabData`. Each entry needs `kanji`, `kana`, `romaji`, `meaning`, `type`, and optional example sentence fields. Supported levels are `N1`, `N2`, `N3`, `N4`, and `N5`.

