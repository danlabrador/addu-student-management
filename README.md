# Student Management System

## Description

This web application features a robust backend built with Django and a dynamic frontend designed with React. This project demonstrates a full-stack development approach with a focus on student management functionalities.

## Getting Started

### Dependencies

- Ensure Python 3.8+ is installed for the backend.
- Node.js and npm are required for the frontend development.

### Installing

1. **Backend Setup**
   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Install Python dependencies:

     ```bash
     pip install -r requirements.txt
     ```

   **Python requirements:**

   ```txt
   Django==4.2.13
   djangorestframework==3.15.1
   ```

2. **Frontend Setup**

   - Navigate to the frontend directory:

     ```bash
     cd frontend
     ```

   - Install Node modules:

     ```bash
     npm install
     ```

   **Key React Dependencies:**
   - React, Redux, React Router, Tailwind CSS, Vite, and various Radix UI components.

### Running the Application

1. **Backend**
   - Start the Django server:

     ```bash
     python manage.py runserver
     ```

2. **Frontend**
   - Launch the development server:

     ```bash
     npm run dev
     ```

## Usage

The application allows users to manage student records with functionalities including adding, editing, and deleting records, as well as advanced filtering capabilities. Visit `http://localhost:5173/` in your browser to interact with the frontend and `http://127.0.0.1:8000/` for backend APIs.

## Contributing

Contributions to this project are welcome. Please ensure to follow the existing coding style, include tests for any new functionality, and update the documentation as needed.

## License

This project is licensed under the [MIT License](LICENSE.md).
