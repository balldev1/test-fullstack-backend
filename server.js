const express = require('express');
const app = express();
const port = 3333;
const cors = require('cors');
const mongoose = require('mongoose');
const contents = require('./routes/Contents.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://balldev1:balldev1@cluster0.cf1sitj.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('connect successfully!'))
    .catch((error) => console.log(error));


app.use(express.json()) // ***json
app.use(cors());
app.use('/content', contents);


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})