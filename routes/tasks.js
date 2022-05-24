const express = require('express')
const router = express.Router()
const {getAllTasks,createTasks,getSingleTasks,updateTasks,deleteTasks} = require("../controller/tasks")




router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getSingleTasks).put(updateTasks).delete(deleteTasks)
  
module.exports = router