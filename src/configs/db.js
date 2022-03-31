const mongoose = require("mongoose");

// step 1 :- connect to mongodb
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/Express-MVC", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connect;
