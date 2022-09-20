import  express, { json }  from "express";
import dotenv from 'dotenv'
import connectDatabase from './config/MongoDb.js'
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js"
import { errorHandler, notFound } from "./Middleware/Error.js";
import userRouter from "./Routes/UserRoutes.js";
// import cors from 'cors'

dotenv.config()
connectDatabase()
const app = express()
// app.use(cors)
app.use(express.json())

//API
app.use('/api/import', ImportData)
app.use('/api/products', productRoute)
app.use('/api/users', userRouter)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 6000
app.listen(PORT, console.log(`server runing on port  ${PORT}`));