import express from 'express'
import { conneciton } from './utils/helpers.js'
import slotRoutes from "./router/slot.routes.js"

const app = express()
app.use(express.json())

app.use("/api", slotRoutes)

app.listen(8080, () => {
    conneciton()
    console.log("server is running");
})