import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({limit:"16kb", extended: true}))
app.use(cors({
    origin:"*"
}))
app.use(cookieParser())


export {app}