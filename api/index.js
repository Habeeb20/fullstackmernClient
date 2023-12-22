import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import user from './routes/user.route.js'
import auth from './routes/auth.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { resolveSoa } from 'dns'
import path from 'path'

const port = process.env.PORT || 3000

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("connected to database")
    })
    .catch((err) => {
        console.log(err)
    })


const __dirname = path.resolve()

const app = express()
app.use(express.static(path.join(__dirname, '/client/dist')))
app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'client','dist','index.html'))
});
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/app', user )
app.use('/app/auth', auth)

// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error'

//     return res.status(statusCode).json({
//         success: false,
//         message,
//         statusCode
//     })
// })

app.listen(3000, () => {
    console.log('server is listenin')
})