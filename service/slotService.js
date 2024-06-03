import Slot from "../model/Slot.js";

export const getSlots = async (req, res) => {
  try {
    const { date } = req.body;
    const slots = await Slot.find({ date: date });
    console.log(slots);
    // if (!slots.length) {
    //   var slot = [];
    //   for (let i = 0; i < 24; i++) {
    //     let startHour = i < 10 ? "0" + i : i.toString();
    //     // let endHour = ((i + 1) < 10) ? '0' + (i + 1) : (i + 1).toString();
    //     slot.push({
    //       startHour: startHour + ":00",
    //       price:999,
    //       isBooked:false,
    //     });
    //   }
    //   let response = {
    //     date:date,
    //     slots:slot
    //   }
    //   res.status(200).json(response)
    // }
    // else
    res.status(200).json(slots);
  } catch (error) {
    throw error;
  }
};

export const bookSlot = async (req, res) => {
  try {
    const { date, slot, ...others } = req.body;
    const slots = await Slot.find({ date: date });
    const isBooked = req.user.type === "Admin" ? true : false;
    if (!slots.length) {
      const newBooking = {
        date: date,
        slots: [{ ...slot, bookedBy: req.user, isBooked: isBooked }],
      };
      await Slot.create(newBooking);
    } else {
      await Slot.updateOne(
        { date: date },
        {
          $push: { slots: { ...slot, bookedBy: req.user, isBooked: isBooked } },
        }
      );
    }
    res.status(200).json({ message: "Booking request post successfully" });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
