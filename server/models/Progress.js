import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },

    favorites: {
      type: [String],
      default: [],
    },

    mastered: {
      type: [String],
      default: [],
    },

    quizScore: {
      correct: {
        type: Number,
        default: 0,
      },

      total: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Progress", progressSchema);