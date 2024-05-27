import mongoose from "mongoose";


const Slot = new mongoose.Schema({
    date: { type: Date, required: true },
    slot1: { type: Object },
    slot2: { type: Object },
    slot3: { type: Object },
    slot4: { type: Object },
    slot5: { type: Object },
    slot6: { type: Object },
    slot7: { type: Object },
    slot8: { type: Object },
    slot9: { type: Object },
    slot10: { type: Object },
    slot11: { type: Object },
    slot12: { type: Object },
    slot13: { type: Object },
    slot14: { type: Object },
    slot15: { type: Object },
    slot16: { type: Object },
    slot17: { type: Object },
    slot18: { type: Object },
    slot19: { type: Object },
    slot20: { type: Object },
    slot21: { type: Object },
    slot22: { type: Object },
    slot23: { type: Object },
    slot24: { type: Object },
})

export default mongoose.model("Slot", Slot)