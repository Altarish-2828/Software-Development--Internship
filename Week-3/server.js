const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// In-memory array for Tasks (Add, View, Delete)
let tasks = [
    { id: 1, title: "Learn Backend Development" },
    { id: 2, title: "Build REST API for Week 3" }
];

// 1. VIEW (GET) - Get all tasks
app.get('/api/tasks', (req, res) => {
    res.status(200).json({
        success: true,
        data: tasks
    });
});

// 2. ADD (POST) - Create a new task
app.post('/api/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ success: false, message: "Title is required" });
    }
    const newTask = {
        id: tasks.length + 1,
        title: title
    };
    tasks.push(newTask);
    res.status(201).json({
        success: true,
        message: "Task added successfully",
        data: newTask
    });
});

// 3. DELETE (DELETE) - Remove a task by ID
app.delete('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ success: false, message: "Task not found" });
    }

    const deletedTask = tasks.splice(taskIndex, 1);
    res.status(200).json({
        success: true,
        message: "Task deleted successfully",
        data: deletedTask[0]
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
