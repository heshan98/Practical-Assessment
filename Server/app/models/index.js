const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.teacher = require("./teacher.model.js")(mongoose);

module.exports = db;