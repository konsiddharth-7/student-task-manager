
const express = require("express");

const {
  sendSuccess,
  sendError,
  paginationMeta,
  sendPaginated,
  asyncHandler,
  errorHandler
} = require("express-response-kit-sid");

const app = express();

app.use(express.json());

let tasks = [
  { id: 1, title: "Complete JavaScript assignment", completed: false },
  { id: 2, title: "Study database management", completed: true },
  { id: 3, title: "Build Express API", completed: false },
  { id: 4, title: "Prepare project documentation", completed: false },
  { id: 5, title: "Submit college project", completed: true }
];

let nextId = 6;

// Home route
app.get("/", (req, res) => {
  sendSuccess(res, {
    application: "Student Task Manager API",
    status: "Running"
  }, "Welcome to Student Task Manager");
});

// Get all tasks with pagination
app.get("/api/tasks", (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 2;

  if (!Number.isInteger(page) || page < 1 ||
      !Number.isInteger(limit) || limit < 1) {
    return sendError(res, "Invalid page or limit", 400, "INVALID_INPUT");
  }

  const start = (page - 1) * limit;
  const paginatedTasks = tasks.slice(start, start + limit);

  sendPaginated(res, paginatedTasks, tasks.length, page, limit);
});

// Get pagination metadata
app.get("/api/pagination-preview", (req, res) => {
  const meta = paginationMeta(tasks.length, 1, 2);

  sendSuccess(res, meta, "Pagination metadata generated");
});

// Get one task
app.get("/api/tasks/:id", (req, res) => {
  const task = tasks.find(item => item.id === Number(req.params.id));

  if (!task) {
    return sendError(res, "Task not found", 404, "NOT_FOUND");
  }

  sendSuccess(res, task, "Task retrieved successfully");
});

// Create a task
app.post("/api/tasks", (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== "string" || !title.trim()) {
    return sendError(res, "Task title is required", 400, "INVALID_INPUT");
  }

  const newTask = {
    id: nextId++,
    title: title.trim(),
    completed: false
  };

  tasks.push(newTask);

  sendSuccess(res, newTask, "Task created successfully", 201);
});

// Example asynchronous route
app.get("/api/async", asyncHandler(async (req, res) => {
  const result = await Promise.resolve({
    message: "Async operation completed successfully"
  });

  sendSuccess(res, result, "Async route successful");
}));

// Example error route
app.get("/api/test-error", asyncHandler(async (req, res) => {
  throw new Error("This is a test error");
}));

// Error-handling middleware
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Student Task Manager running at http://localhost:${PORT}`);
});
