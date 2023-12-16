import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import cookieParser from 'cookie-parser'
dotenv.config()
import cors from 'cors';
//Router
import bookingRouter from './routes/bookingRoute.js'
import adminRouter from './routes/adminRoute.js'
import bookingPlanRouter from './routes/bookingPlanRoute.js'
import bookTypeOneDateRouter from './routes/bookTypeOneDateRoutes.js'
import bookTypeTwoDateRouter from './routes/bookTypeTwoDateRoutes.js'
import bookTypeThreeDateRouter from './routes/bookTypeThreeDateRoutes.js'
import bookTypeFourDateRouter from './routes/bookTypeFourDateRoutes.js'
import bookTypeFiveDateRouter from './routes/bookTypeFiveDateRoutes.js'


import errorHandlerMiddleware from './middlewares/errorHandleMiddleware.js'


const __dirname = path.resolve();

const app = express()
app.use(cors());


const PORT = process.env.PORT || 4000

//Middlewares
app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/booking", bookingRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/bookingplan", bookingPlanRouter)
app.use("/api/v1/booktype-one-dates-manage", bookTypeOneDateRouter)
app.use("/api/v1/booktype-two-dates-manage", bookTypeTwoDateRouter)
app.use("/api/v1/booktype-three-dates-manage", bookTypeThreeDateRouter)
app.use("/api/v1/booktype-four-dates-manage", bookTypeFourDateRouter)
app.use("/api/v1/booktype-five-dates-manage", bookTypeFiveDateRouter)

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.use(errorHandlerMiddleware)

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        app.listen(PORT, () => {
            console.log("Server is Runnning on PORT : ", PORT);
        })
    } catch (error) {
        console.log(error);
    }
}

dbConn()

