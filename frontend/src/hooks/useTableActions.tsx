import { Student } from "@/models/Student";
import { AppDispatch, RootState } from "@/services/state/store";
import { deleteStudentAsync, getStudentsAsync } from "@/services/state/students/studentsThunks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useTableActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, data: students } = useSelector((state: RootState) => state.students);

  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [gender, setGender] = useState('');
  const [minAge, setMinAge] = useState<number | ''>('');
  const [maxAge, setMaxAge] = useState<number | ''>('');
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(students);

  // Fetch students on component mount
  useEffect(() => {
    dispatch(getStudentsAsync());
  }, []);


  // Filter students based on the filter values
  useEffect(() => {
    setFilteredStudents(students.filter(student => {
      if (typeof student.age === 'string') student.age = parseInt(student.age);
      
      if (name && !student.name.toLowerCase().includes(name.toLowerCase())) return false;
      if (course && course !== 'All' && student.course !== course) return false;
      if (gender && gender !== 'All' && student.gender !== gender) return false;
      if (minAge && student.age < minAge) return false;
      if (maxAge && student.age > maxAge) return false;
      return true;
    }));
  }, [name, course, gender, minAge, maxAge, isLoading]);

  const deleteStudent = (id: number) => {
    dispatch(deleteStudentAsync(id));
    setFilteredStudents(filteredStudents.filter(student => student.id !== id));
  }

  return { setName, setCourse, setGender, setMinAge, setMaxAge, filteredStudents, name, course, gender, minAge, maxAge, deleteStudent };
};
