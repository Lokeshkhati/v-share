import express from 'express';
const app = express()
import dotenv from "dotenv"
dotenv.config()
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api/v1/auth', user)



export default app