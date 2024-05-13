import { createAsyncThunk } from "@reduxjs/toolkit";
import { Student } from "../../../models/Student";

export const getStudentsAsync = createAsyncThunk('students/getStudents', async () => {
  const response = await fetch('http://127.0.0.1:8000/api/students/');
  if (!response.ok) {
    throw new Error('Failed to fetch students');
  }
  return await response.json();
});

export const createStudentAsync = createAsyncThunk('students/createStudent', async (student: Student) => {
  const response = await fetch('http://127.0.0.1:8000/api/students/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });

  if (!response.ok) {
    throw new Error('Failed to create student');
  }

  return await response.json();
  }
);

export const updateStudentAsync = createAsyncThunk('students/updateStudent', async (student: Student) => {
  const response = await fetch(`http://127.0.0.1:8000/api/students/${student.id}/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  if (!response.ok) {
    throw new Error('Failed to update student');
  }
  return await response.json();
});

export const deleteStudentAsync = createAsyncThunk('students/deleteStudent', async (studentId: number) => {
  const response = await fetch(`http://127.0.0.1:8000/api/students/${studentId}/delete`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete student');
  }
  return studentId;
});
