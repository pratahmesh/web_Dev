# Todo App

## Project Structure

todo-app/
│
├── backend/
│ ├── index.js
│ ├── DB.js
│ └── types.js
│
├── frontend/
│ ├── components/
│ │ ├── CreateTodo.jsx
│ │ └── Todos.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
│
├── package-lock.json
└── package.json

## MERN Stack Todo App

Welcome to my MERN (MongoDB, Express.js, React.js, Node.js) stack todo app repository! 🚀 This project is a simple todo application built using the MERN stack, showcasing the integration of MongoDB as the database, Express.js for the backend, React.js for the frontend, and Node.js as the runtime environment.

## Backend Setup

1. Make sure MongoDB is running.
2. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd todo-app/backend
3. Install dependencies
   ```bash  
   npm install
3. Start the backend server 
    ```bash
    node index.js
## Frontend Setup
1. Open a new terminal and navigate to the frontend folder:
    ```bash
    cd todo-app/frontend
2. Install dependencies:
    ```bash
    npm install
3. Start the frontend development server:
    ```bash
    npm run dev
##### Open your browser and go to http://localhost:3000 to view the app.


## Important Commands
Start MongoDB: Ensure your MongoDB instance is active.
Start Backend Server: node index.js in the backend folder.
Start Frontend Development Server: npm run dev in the frontend folder.

## Highlights

Backend MongoDB Connection: The backend relies on a MongoDB connection. Ensure your MongoDB is active and the connection details in DB.js are correct.