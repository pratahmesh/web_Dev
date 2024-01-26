//mongodb+srv://admin:showTHEcode@cluster0.ndydelu.mongodb.net/
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:showTHEcode@cluster0.ndydelu.mongodb.net/todos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoSchema =  mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {todo};