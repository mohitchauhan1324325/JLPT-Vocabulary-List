/**
 * Seed script — populates MongoDB with JLPT vocabulary data
 * Run with: node data/seed.js
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import dns from 'dns';

import Vocab from '../models/Vocab.js';
import n5Vocab from './n5_vocab.js';


// __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Load .env
dotenv.config({
  path: path.join(__dirname, '../.env'),
});


// DNS configuration
dns.setServers(['8.8.8.8', '8.8.4.4']);


const vocabData = {
  N5: n5Vocab,
};


async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('✅ Connected to MongoDB');


    // Clear existing vocab
    await Vocab.deleteMany({});

    console.log('🗑️ Cleared existing vocab collection');


    // Flatten and insert
    const docs = [];

    for (const [level, words] of Object.entries(vocabData)) {
      for (const word of words) {
        docs.push({
          ...word,
          level,
        });
      }
    }


    await Vocab.insertMany(docs);


    // Test inserted document
    const test = await Vocab.findOne({
      kanji: '〜台',
    });

    console.log('AFTER INSERT:');
    console.log(test);


    console.log(`✅ Seeded ${docs.length} vocabulary words`);


    // Count words per level
    const counts = await Vocab.aggregate([
      {
        $group: {
          _id: '$level',
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          _id: -1,
        },
      },
    ]);


    console.log('\n📊 Words per level:');

    counts.forEach(({ _id, count }) => {
      console.log(`   ${_id}: ${count} words`);
    });


    await mongoose.disconnect();

    console.log('\n✅ Seed complete! Disconnected from MongoDB.');

    process.exit(0);

  } catch (err) {
    console.error('❌ Seed failed:', err.message);

    process.exit(1);
  }
}


seed();