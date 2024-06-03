import mongoose from "mongoose";

const Slot = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    slots: { type: Array },
  },
  { timestamps: true }
);

export default mongoose.model("Slot", Slot);
