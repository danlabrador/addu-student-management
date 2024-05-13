import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Student } from "@/models/Student";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { updateStudentAsync } from "@/services/state/students/studentsThunks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/services/state/store";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface EditStudentButtonProps {
  student: Student;
}

export const EditStudentButton = ({ student }: EditStudentButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [newName, setNewName] = useState(student.name);
  const [newCourse, setNewCourse] = useState(student.course);
  const [newGender, setNewGender] = useState(student.gender);
  const [newAge, setNewAge] = useState(student.age);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setNewName(student.name);
      setNewCourse(student.course);
      setNewGender(student.gender);
      setNewAge(student.age);
    }
  }, [open])


  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log('handlesubmit triggered');
    dispatch(updateStudentAsync({
      id: student.id,
      name: newName,
      course: newCourse,
      gender: newGender,
      age: newAge
    }));

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='bg-blue-500 hover:bg-blue-600 active:bg-blue-700 h-7'>Update</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update student</DialogTitle>
          <DialogDescription>
            Make changes to the student's record here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="edit-name"
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
              className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="course" className="text-right">
              Course
            </Label>
            <Select defaultValue={newCourse} onValueChange={setNewCourse}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder='Select a course' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='BS-CS'>BS-CS</SelectItem>
                  <SelectItem value='BS-DS'>BS-DS</SelectItem>
                  <SelectItem value='BS-IS'>BS-IS</SelectItem>
                  <SelectItem value='BS-IT'>BS-IT</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor='gender' className='text-right'>
              Gender
            </Label>
            <RadioGroup className='flex' value={newGender} onValueChange={setNewGender}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="r1" />
                <Label htmlFor="r1">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="r2" />
                <Label htmlFor="r2">Female</Label>
              </div>
            </RadioGroup>
          </div>


          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Age
            </Label>
            <Input
              type='number'
              id="edit-age"
              onChange={(event) => setNewAge(Number(event.target.value))}
              value={newAge}
              className="col-span-3" />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
