process.env.REACT_APP_VERCEL_TZ = 'Asia/Manila'

const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();

const cors = require('cors');

const cal = require('./api/googleCal');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
    res.send({ message: 'Awesome it works 🐻' });
});

app.use(cors())

app.use("/api/cal", cal);

app.use((req, res, next) => {
    next(createError.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      status: err.status || 500,
      message: err.message,
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Starting Server on Port ${PORT}`);
})
