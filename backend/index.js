const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./DB");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    // safeParse is a function that returns an object with a success property (true or false) based on the zod validation,Here the creareTodo and updateTodo is a zod object that we have imported from types.js and we are using it to parse the createPayload , createPayload is the object/body that we are sending from the frontend
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res) {
    // const todos = await todo.find({});

    res.json({
        todos: []
    })

})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    }, {
        $set: { completed: true }
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });