import mongoose from "mongoose";

const statsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
      index: true,
    },
    bodyStats: {
      weight: {
        type: Number,
        required: true,
        min: 1, // Minimum valid weight
      },
      calorieIntake: {
        type: Number,
        min: 0,
      },
      waterIntake: {
        type: Number,
        min: 0,
      },
      bodyMeasurements: {
        type: new mongoose.Schema(
          {
            chest: { type: Number, min: 0 },
            waist: { type: Number, min: 0 },
            hips: { type: Number, min: 0 },
            biceps: { type: Number, min: 0 },
            thighs: { type: Number, min: 0 },
          },
          {
            _id: false,
          }
        ),
        default: {},
      },
      bmi: {
        type: Number,
        min: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Stats = mongoose.model("stat", statsSchema);

module.exports = Stats;
