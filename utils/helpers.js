import mongoose from "mongoose"

export const conneciton = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/turf").then(() => {
        console.log("db connected")
    }).catch(err=>{console.log(err)})
}