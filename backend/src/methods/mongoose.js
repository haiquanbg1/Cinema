const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/web";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
    throw err;
})

const Schema = mongoose.Schema;

const comment  = new Schema({
    user: {type: Number},
    cinema: {type: Number},
    content: {type: String},
    rating: {type: Number},
    time: {type: Date, default: new Date},
});

module.exports = mongoose.model('Comment',comment);

