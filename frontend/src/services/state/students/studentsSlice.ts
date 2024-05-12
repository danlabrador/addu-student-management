import { createSlice } from "@reduxjs/toolkit";
import { Student } from "../../../models/Student";
import { getStudentsAsync, updateStudentAsync, deleteStudentAsync } from "./studentsThunks";

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    data: [] as Student[],
    isLoading: false,
    error: null,
  },
  reducers: {
    setStudents: (state, action) => {
      state.data = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getStudentsAsync.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStudentsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateStudentAsync.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateStudentAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedStudent = action.payload;
        const studentIndex = state.data.findIndex(student => student.id === updatedStudent.id);
        state.data[studentIndex] = updatedStudent;
      })
      .addCase(deleteStudentAsync.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteStudentAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const studentId = action.payload;
        state.data = state.data.filter(student => student.id !== studentId);
      })
  }
})

export default studentsSlice.reducer;
export const { setStudents } = studentsSlice.actions;
