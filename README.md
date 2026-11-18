# Student Task Manager API

A simple REST API built with Node.js and Express.js to manage student tasks and demonstrate the integration of a published npm package, **express-response-kit-sid**.

The project demonstrates how reusable npm packages can be integrated into an Express application to handle standardized API responses, pagination, asynchronous error handling, and centralized error management.

---

## Project Overview

The Student Task Manager API provides endpoints to retrieve tasks, create new tasks, retrieve individual tasks, test pagination, and demonstrate asynchronous and error-handling functionality.

The API uses `express-response-kit-sid` to maintain a consistent response structure across endpoints.

## Features

- REST API built with Node.js and Express.js
- Standardized success responses
- Standardized error responses
- Paginated task listing
- Pagination metadata
- Retrieve individual tasks by ID
- Create new tasks
- Async route error handling
- Centralized Express error middleware
- Integration with a published npm package

## Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for building APIs
- **express-response-kit-sid** – npm package for standardized API responses, pagination, and error handling
- **npm** – Package manager

## npm Package Integration

This project uses the published npm package:

**express-response-kit-sid**

Package link:

https://www.npmjs.com/package/express-response-kit-sid

The package provides reusable functions that are integrated into the Student Task Manager API.

### Functions Used

| Function | Purpose |
|---|---|
| `sendSuccess()` | Sends standardized success responses |
| `sendError()` | Sends standardized error responses |
| `paginationMeta()` | Generates pagination metadata |
| `sendPaginated()` | Returns data with pagination information |
| `asyncHandler()` | Handles errors from asynchronous route handlers |
| `errorHandler()` | Centralized Express error-handling middleware |

These functions eliminate the need to repeatedly implement response formatting and error-handling logic inside individual API routes.

---

## Project Structure

```text
student-task-manager/
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/konsiddharth-7/student-task-manager.git
```

### 2. Navigate to the project directory

```bash
cd student-task-manager
```

### 3. Install dependencies

```bash
npm install
```

This installs Express.js and the project's dependencies, including the published npm package `express-response-kit-sid`.

---

## Running the Application

Start the server using:

```bash
node server.js
```

The server runs locally at:

http://localhost:3000

Once the server starts successfully, the API endpoints can be tested using a browser, curl, Postman, or another API testing tool.

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API welcome message |
| GET | `/api/tasks` | Retrieve paginated tasks |
| GET | `/api/tasks?page=2&limit=2` | Retrieve a specific page of tasks |
| GET | `/api/pagination-preview` | View pagination metadata |
| GET | `/api/tasks/:id` | Retrieve a task by ID |
| POST | `/api/tasks` | Create a new task |
| GET | `/api/async` | Demonstrate asynchronous handling |
| GET | `/api/test-error` | Test centralized error middleware |

---

## Testing the API

The following requests can be used to verify the functionality of the application and the integration of `express-response-kit-sid`.

Make sure the server is running before executing these requests.

### 1. Welcome Endpoint

**Request**

```http
GET /
```

Using curl:

```bash
curl http://localhost:3000/
```

This endpoint returns a welcome response confirming that the API is running.

---

### 2. Retrieve All Tasks

**Request**

```http
GET /api/tasks
```

Using curl:

```bash
curl http://localhost:3000/api/tasks
```

This endpoint retrieves the available tasks along with pagination information.

The response uses the standardized structure provided by the npm package.

---

### 3. Test Pagination

**Request**

```http
GET /api/tasks?page=2&limit=2
```

Using curl:

```bash
curl "http://localhost:3000/api/tasks?page=2&limit=2
```

This endpoint allows pagination to be tested by specifying the page number and number of records per page.

Parameters:

| Parameter | Description |
|---|---|
| `page` | Specifies the page number to retrieve |
| `limit` | Specifies the number of tasks returned per page |

This demonstrates the pagination functionality provided through `express-response-kit-sid`.

---

### 4. Pagination Preview

**Request**

```http
GET /api/pagination-preview
```

Using curl:

```bash
curl http://localhost:3000/api/pagination-preview
```

This endpoint demonstrates the generation of pagination metadata, including information such as:

- Current page
- Page limit
- Total records
- Total pages
- Next page availability
- Previous page availability

The metadata is generated using the package's pagination functionality.

---

### 5. Retrieve a Task by ID

**Request**

```http
GET /api/tasks/:id
```

Example:

```bash
curl http://localhost:3000/api/tasks/1
```

This endpoint retrieves a specific task using its ID.

It also demonstrates standardized API response handling for retrieving individual resources.

---

### 6. Create a New Task

**Request**

```http
POST /api/tasks
```

Endpoint:

```text
http://localhost:3000/api/tasks
```

Request body:

```json
{
  "title": "Learn npm package development"
}
```

This endpoint creates a new task and returns the result using the standardized response structure.

Example curl request:

```bash
curl -X POST http://localhost:3000/api/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Learn npm package development"}'
```

---

### 7. Test Asynchronous Handling

**Request**

```http
GET /api/async
```

Using curl:

```bash
curl http://localhost:3000/api/async
```

This endpoint demonstrates asynchronous route handling using the `asyncHandler()` function provided by `express-response-kit-sid`.

It verifies how asynchronous operations are handled within Express routes.

---

### 8. Test Error Handling

**Request**

```http
GET /api/test-error
```

Using curl:

```bash
curl http://localhost:3000/api/test-error
```

This endpoint intentionally triggers an error to demonstrate the centralized error-handling middleware.

The error is handled using the `errorHandler()` function provided by the npm package.

---

## Response Handling

The application uses `express-response-kit-sid` to maintain a standardized response format.

### Success Responses

Successful API requests are handled using the package's `sendSuccess()` function or `sendPaginated()` function.

This helps maintain a consistent response structure across different endpoints.

### Error Responses

Errors are handled using:

- `sendError()` for standardized error responses
- `asyncHandler()` for forwarding asynchronous errors
- `errorHandler()` for centralized error handling

This reduces repetitive error-handling code within the application.

---

## Verification of npm Package Integration

The integration of `express-response-kit-sid` can be verified through the following steps.

### Step 1: Verify Package Installation

Run:

```bash
npm list express-response-kit-sid
```

This confirms whether the package is installed in the project and displays its installed version.

### Step 2: Verify Package Import

The application imports the package functions inside `server.js`:

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

### Step 3: Start the Application

Run:

```bash
node server.js
```

### Step 4: Test the API Endpoints

Execute the API requests described above to verify:

- Standardized success responses
- Standardized error responses
- Pagination functionality
- Task retrieval
- Task creation
- Async error handling
- Centralized error middleware

### Step 5: Verify Response Output

Inspect the returned JSON responses to verify that the package functions are working as expected within the application.

---

## Running the Project

Quick-start commands:

```bash
git clone https://github.com/konsiddharth-7/student-task-manager.git

cd student-task-manager

npm install

node server.js
```

The API will be available at:

http://localhost:3000

---

## Repository

**GitHub Repository:**

https://github.com/konsiddharth-7/student-task-manager

**npm Package Used:**

https://www.npmjs.com/package/express-response-kit-sid

---

## License

ISC
