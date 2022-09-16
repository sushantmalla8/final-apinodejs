const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/db_merorecipe', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then((con) => {
    console.log(`Connected to ${con.connection.host}`)
})