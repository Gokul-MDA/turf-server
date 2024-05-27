import Slot from "../model/Slot.js"

export const getSlots = async (req, res) => {
    try {
        const slots = await Slot.find()
        console.log(slots, "slots")
        res.status(200).json(slots)
    } catch (error) {
        console.log(error)
        throw error
    }

}

export const bookSlot = async (req, res) => {
    try {
        const { date, slot, bookedBy, name, phoneNumber, email } = req.body
        const newBooking = {
            date: date,
            slot: slot,
            bookedBy: bookedBy,
            name: name,
            phoneNumber: phoneNumber,
            email: email
        }
        
    } catch (error) {
        throw error
    }
}