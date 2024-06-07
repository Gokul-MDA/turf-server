import Slot from "../model/Slot.js";
import User from "../model/User.js";

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
    const isBooked = await User.find({ _id: req.user.id }).then((data) =>
      data[0]?.type === "Admin" ? true : false
    );
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

export const requestedSlots = async (req, res, next) => {
  try {
    const slots = await Slot.find();
    let today = new Date();
    // console.log(slots, "slots");
    const pendingSlots = slots
      .filter((item) => {
        const date1 = new Date(item.date).toISOString().slice(0, 10);
        const date2 = new Date(today).toISOString().slice(0, 10);
        if (date1 >= date2) return item;
        else return;
      })
      .map((item) => {
        return item.slots.filter((item2,index)=>!item2.isBooked ? item: null)
      });
    console.log("pending", pendingSlots);
    res.status(200).json(pendingSlots);
  } catch (error) {
    throw error;
  }
};
