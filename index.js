import express from 'express'
import { conneciton } from './utils/helpers.js'
import slotRoutes from "./router/slot.routes.js"
import userRoutes from "./router/user.routes.js"

const app = express()
app.use(express.json())

app.use("/api", slotRoutes)
app.use("/api", userRoutes)

app.use((err, req, res, next)=>{
    const status = err.status || 500
    const message = err.message ||"Something went wrong!";
    return res.status(status).json({
        success:false,
        status,
        message,
    })
})

app.listen(8080, () => {
    conneciton()
    console.log("server is running");
})