import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config()
const app = express()

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
const PORT = process.env.PORT

app.listen(PORT, console.log(`Ichama running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline))