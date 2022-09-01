const express = require('express');
const cors = require('cors');
const config = require('./utils/initializer');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const app = express();
const morgan = require('morgan');
const hotelRoutes = require('./services/Hotel/routes');
const post = require("./services/post/routes");
app.use(morgan('dev'));


app.use(express.json({ limit: '50mb' }));

app.use(cors());

app.use('/api', hotelRoutes)
app.use('/api', post)



app.all("*", (req, res) => {
    res.status(404).json({
        message: "آدرس مورد نظر یافت نشد",
    });
});


if (dotenv.error) {
    throw dotenv.error;
}


// run initial config
config.Initialize().then(() => console.log('mongodb connected successfully'));

//run server
const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});