import Slot from "../model/Slot.js";

export const getSlots = async (req, res) => {
  try {
    const slots = await Slot.find();
    console.log(slots, "slots");
    res.status(200).json(slots);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const bookSlot = async (req, res) => {
  try {
    const { date, slot, ...others } = req.body;
    const newBooking = {
      date: date,
      slots: [{ slot, boodkedBy: { ...others } }],
    };
    await Slot.create(newBooking);
    res.status(200).json({ message: "Booking request post successfully" });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
