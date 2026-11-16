
# Student Task Manager API

A simple REST API built with Node.js and Express.js to demonstrate the use of the published npm package **express-response-kit-sid**.

## npm Package

https://www.npmjs.com/package/express-response-kit-sid

## Features

- Standardized success responses
- Standardized error responses
- Paginated task listing
- Pagination metadata
- Async error handling
- Centralized Express error middleware
- Create and retrieve student tasks

## Technologies

- Node.js
- Express.js
- express-response-kit-sid

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/student-task-manager.git
cd student-task-manager
```

Install dependencies:

```bash
npm install
```

## Run the application

```bash
node server.js
```

The server runs at:

http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | API welcome message |
| GET | /api/tasks | Get paginated tasks |
| GET | /api/tasks?page=2&limit=2 | Get second page |
| GET | /api/pagination-preview | Get pagination metadata |
| GET | /api/tasks/:id | Get a task by ID |
| POST | /api/tasks | Create a task |
| GET | /api/async | Test async handling |
| GET | /api/test-error | Test error middleware |

## Create a Task

Send a POST request to:

`http://localhost:3000/api/tasks`

Request body:

```json
{
  "title": "Learn npm package development"
}
```

## Package Integration

This application imports the following utilities from the published npm package:

```javascript
const {
  sendSuccess,
  sendError,
  paginationMeta,
  sendPaginated,
  asyncHandler,
  errorHandler
} = require("express-response-kit-sid");
```

## License

ISC
