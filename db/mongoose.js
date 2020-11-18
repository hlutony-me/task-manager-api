const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TaskManager', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected to db");
}).catch((e) => {
    console.log("Error while connecting to db.");
    console.log(e);
})

module.exports = {
    mongoose
};
