const mongoose = require('mongoose');
const MONGODB_URI="mongodb+srv://RjNZJieDzLKDmmXR@cluster0.13oxo.mongodb.net/test"

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mydb', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log( 'Database Connected' ))
    .catch(err => console.log(err));
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});