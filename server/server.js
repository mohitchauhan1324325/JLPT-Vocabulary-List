import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import dns from 'dns';

import vocabRoutes from './routes/vocab.js';
import progressRoutes from './routes/progress.js';
import errorHandler from './middleware/errorHandler.js';
import authRoutes from "./routes/auth.js";

dotenv.config();

dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();


// ── Middleware ──

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
      process.env.CLIENT_URL,
    ],
    credentials: true,
  })
);

app.use(express.json());


// ── Routes ──

app.use('/api/vocab', vocabRoutes);
app.use('/api/progress', progressRoutes);
app.use("/api/auth", authRoutes);


// ── Health check ──

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'JLPT Vocab API is running 🎌',
  });
});


// ── Error Handler ──

app.use(errorHandler);


// ── MongoDB Connection ──

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(
      '❌ MongoDB connection error:',
      err.message
    );

    process.exit(1);
  });