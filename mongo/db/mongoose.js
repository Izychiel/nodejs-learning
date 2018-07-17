// USE MONGOOSE
const mongoose = require('mongoose');

// CONNECT TO DB test
mongoose.connect('mongodb://localhost/test',function (error) {
    if(error) {throw error};
});

// GLOBAL MONGOOSE ACCESS
module.exports = {mongoose};    // IN CASE OF module.exports.mongoose = mongoose;