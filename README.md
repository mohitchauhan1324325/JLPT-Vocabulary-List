# JLPT Vocab

![Node.js 18+](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white) ![React 18](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=111827) ![Vite 5](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white) ![Express 4](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248?logo=mongodb&logoColor=white) ![License MIT](https://img.shields.io/badge/License-MIT-F0C808)

A full-stack JLPT vocabulary study tool. Browse Japanese words, search and filter by level or part of speech, study with flashcards, take quizzes, and keep favorites and mastered words across sessions.

## Contents

- [Tech stack](#tech-stack)
- [Project analysis](#project-analysis)
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

## Project analysis

JLPT Vocab is a two-process MERN-style application:

```text
Browser (React + Vite)
	|
	| Axios requests to /api
	v
Express API (Node.js)
	|
	v
MongoDB (User, Progress, and Vocab collections)
```

### Runtime flow

1. Vite serves the React client on port `5173` and proxies `/api` requests to the Express server on port `5000` during development.
2. The client starts at `/`, where the landing page links users to authentication or the vocabulary experience.
3. Registration and login call `/api/auth`, receive a seven-day JWT, and store the token and basic user record in `localStorage`.
4. `App.jsx` protects `/vocabulary`, `/quiz`, and `/flashcards`. `AuthContext` adds the JWT as a Bearer token to every Axios request.
5. `AppContext` owns shared study state. Changing the JLPT level, part of speech, search text, or page triggers a paginated vocabulary request and a second `all=true` request for study modes.
6. The API filters vocabulary by level, type, and a case-insensitive search over kanji, kana, romaji, and English meaning. Results are sorted with Japanese collation.
7. Authenticated progress actions update the user's single `Progress` document. Favorites and mastered words are stored as vocabulary keys, while quiz activity increments `correct` and `total` counters.

### State and persistence boundaries

| Concern | Owner | Persistence |
| --- | --- | --- |
| Authenticated user and JWT | `AuthContext` | Browser `localStorage`; user and hashed password in MongoDB |
| Vocabulary filters, page, loading, and toast state | `AppContext` | React memory |
| Vocabulary records | Express vocabulary controller | MongoDB `Vocab` collection |
| Favorites, mastered words, and quiz score | Express progress controller | MongoDB `Progress` collection, keyed by `userId` |
| `jlpt_session_id` | Axios client | Browser `localStorage`; sent as `x-session-id`, but not currently used by the server for authorization |

### Security and operational notes

- Passwords are hashed with `bcryptjs`; passwords are never returned in auth responses.
- Progress endpoints require a valid `Authorization: Bearer <token>` header. Vocabulary and health endpoints are public.
- `JWT_SECRET` is required for registration, login, and progress requests and must be set in `server/.env`.
- CORS allows the local Vite and port `3000` origins plus the optional `CLIENT_URL` value.
- The seed script deletes the complete vocabulary collection before inserting its configured datasets. Treat it as a development or intentionally reset operation.
- There are currently no test scripts or test files in the repository. Client production builds can be checked with `npm run build`.

## Features

- Vocabulary list with Japanese sorting, pagination, and empty/loading states.
- JLPT level navigation for N1 through N5 and part-of-speech filtering.
- Search across kanji, kana, romaji, and English meaning.
- Flashcard mode with furigana, example sentences, speech support, favorites, and mastered status.
- Quiz mode with persistent correct and total answer counts.
- Account-based progress protected by JWT authentication.
- MongoDB seed script. The bundled dataset currently seeds 800 N5 entries; the schema supports N1-N5.
- Responsive client served by Vite and connected to the API through a development proxy.

## Project structure

```text
jlpt_vocab/
├─ client/
│  ├─ src/
│  │  ├─ api/             # Axios API client and session header
│  │  ├─ components/      # Navigation, filters, cards, study modes, stats, and feedback
│  │  ├─ context/         # Auth state and shared vocabulary/progress state
│  │  ├─ pages/           # Landing, auth, vocabulary, quiz, and flashcard views
│  │  └─ utils/           # Furigana, quiz, and speech helpers
│  ├─ package.json
│  └─ vite.config.js       # Vite server and /api proxy
├─ server/
│  ├─ data/               # N5 vocabulary and seed script
│  ├─ middleware/         # JWT auth guard and error handler
│  ├─ models/             # User, Vocab, and Progress Mongoose models
│  ├─ routes/             # Auth, vocabulary, and progress endpoints
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
JWT_SECRET=replace-with-a-long-random-secret
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

Progress routes require the JWT added by the client as `Authorization: Bearer <token>`. The client also sends an `x-session-id` header for compatibility, but the current server identifies progress by the JWT user ID.

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

### Authentication

| Method | Endpoint | Body | Description |
| --- | --- | --- | --- |
| `POST` | `/api/auth/register` | `{ "name": "Aki", "email": "aki@example.com", "password": "..." }` | Create an account and return a JWT |
| `POST` | `/api/auth/login` | `{ "email": "aki@example.com", "password": "..." }` | Validate credentials and return a JWT |

### Health check

```text
GET /api/health
```

Returns `{ "status": "ok" }` when the API is running.

## Adding vocabulary

Add entries to `server/data/n5_vocab.js`, or add another level dataset and register it in `server/data/seed.js` under `vocabData`. Each entry needs `kanji`, `kana`, `romaji`, `meaning`, and a schema-supported `type`; `example`, `exampleRomaji`, and `exampleMeaning` are optional. The dataset level is assigned by the key in `vocabData`, and supported levels are `N1`, `N2`, `N3`, `N4`, and `N5`.

## Current scope

- Only the N5 seed dataset is bundled and registered, even though the data model and UI are prepared for N1-N4.
- Quiz and flashcard content is loaded from the filtered `all=true` vocabulary response, so very large datasets may require server-side limits or a dedicated study endpoint.
- Authentication has login and registration only; there is no password reset, email verification, refresh-token flow, or account deletion endpoint.
- Progress is account-specific and requires signing in. The browser UUID does not provide a separate anonymous progress mode.

