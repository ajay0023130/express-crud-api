
const Crud = require('../model/database.js');
const getAllTasks = (req, res) => {
    Crud.find()
        .then(tasks => {
            res.send(tasks);
        })
    console.log("all Task")
}
const createTasks = (req, res) => {
    const task = Crud({
        title: req.body.title,
        content: req.body.content
    })
    task.save()
        .then(data => {
            res.send(data);
        })
    console.log("save data")
}
const getSingleTasks = (req, res) => {
    Crud.findById(req.params.id)
        .then(task => {
            if (!task) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.id
                });
            }
            res.send(task);
        })
    // res.json({ id:req.params.id })
}
const updateTasks = (req, res, next) => {
    const task = new Crud({
        _id: req.params.id,
        title: req.body.title,
        content: req.body.content
    })
    console.log("new thing", task)

    Crud.updateOne({ _id: req.params.id }, task).then(data => {
        res.send(data);
    })




    console.log("taskid", req.params.id)

    // res.send("update Task")
}




const deleteTasks = (req, res) => {
    Crud.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({ "msg": "delete data" })
    )
    res.send("delete Task")
}

module.exports = { getAllTasks, createTasks, getSingleTasks, updateTasks, deleteTasks }