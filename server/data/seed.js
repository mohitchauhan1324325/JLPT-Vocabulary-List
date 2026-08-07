/**
 * Seed script — populates MongoDB with JLPT vocabulary data
 * Run with: node data/seed.js
 */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const Vocab = require('../models/Vocab');
const n5Vocab = require('./n5_vocab');

const vocabData = {
  N5: n5Vocab,
};


async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing vocab
    await Vocab.deleteMany({});
    console.log('🗑️  Cleared existing vocab collection');

    // Flatten and insert
    const docs = [];
    for (const [level, words] of Object.entries(vocabData)) {
      for (const word of words) {
        docs.push({ ...word, level });
      }
    }
    // console.log(
    //   [...new Set(docs.map(word => word.type))]
    // );
    await Vocab.insertMany(docs);

    const test = await Vocab.findOne({ kanji: "〜台" });

    console.log("AFTER INSERT:");
    console.log(test);
    console.log(`✅ Seeded ${docs.length} vocabulary words`);

    const counts = await Vocab.aggregate([
      { $group: { _id: '$level', count: { $sum: 1 } } },
      { $sort: { _id: -1 } },
    ]);
    console.log('\n📊 Words per level:');
    counts.forEach(({ _id, count }) => console.log(`   ${_id}: ${count} words`));

    await mongoose.disconnect();
    console.log('\n✅ Seed complete! Disconnected from MongoDB.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed failed:', err.message);
    process.exit(1);
  }
}

seed();
