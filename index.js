const express = require("express")
const cors = require("cors")
const mongooseConnection = require("./db/mongodb.connection")
const Task = require("./models/task.model");
const app = express();
const PORT = 3000;

// Set up CORS
app.use(cors());
app.use(express.json())

app.get("/getAllTask", async (req, res)=> {
    try{
        let allTask = await Task.find();
        res.status(201).json({"response": allTask})
    }
    catch(error) {
        res.status(500).json({"response": error})
    }
})

app.post("/createTask", (req, res) => {
    const newTask = new Task({
        task: req.body.task,
        status: req.body.status,
        priority: req.body.priority,
        createdDate: req.body.createdDate,
        dueDate: req.body.dueDate,
    })

    newTask.save()
    .then((newTask)=>{
        res.status(201).json({"response": newTask, "message": "Added Successfully"})
    })
    .catch((error) => {
        res.status(500).json({"response": error})
    })
})

app.put("/editTask/:_id", async (req, res) => {
   try{
        let editedTask = await Task.findByIdAndUpdate(req.params._id, req.body, { new: true })
        res.status(201).json({"response": editedTask, "message": "Edited Successfully"})
    }catch(error) {
        res.status(500).json({"response": error})
    }
})

app.delete("/deleteTask/:_id", async (req, res) => {
    try{
         let deletedTask = await Task.findByIdAndDelete(req.params._id)
         res.status(201).json({"response": deletedTask, "message": "Deleted Successfully"})
     }catch(error) {
         res.status(500).json({"response": error})
     }
 })

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server started at port ${PORT}`)
})