import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes'
dotenv.config()

const app = express()

// app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
app.use('/',routes)
const PORT = process.env.PORT

app.listen(PORT, console.log(`Ichama running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline))