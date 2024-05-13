import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { useTableActions } from "../hooks/useTableActions";
import { DeleteStudentButton } from "../components/DeleteStudentButton";
import { EditStudentButton } from "../components/EditStudentButton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const DashboardPage = () => {
  const {
    setName,
    setCourse,
    setGender,
    setMinAge,
    setMaxAge,
    filteredStudents,
    name,
    course,
    gender,
    minAge,
    maxAge,
    deleteStudent
  } = useTableActions();


  return (
    <Card className='m-8'>
      <CardHeader>
        <CardTitle>Students</CardTitle>
      </CardHeader>

      <CardContent>
        <div className='pace-y-2 mb-2'>
          <div className='flex gap-4'>
            <Link to='/add'>
              <button className='bg-blue-500 active:bg-blue-600 text-white px-2 py-1 rounded'>Add Student</button>
            </Link>
            <button className='bg-blue-500 active:bg-blue-600 text-white px-2 py-1 rounded' onClick={()=>{
              setName('')
              setCourse('')
              setGender('')
              setMinAge('')
              setMaxAge('')
            }}>Clear Filters</button>
          </div>
          
          <div className='flex flex-col my-4 gap-2'>
            <Label>Filters</Label>
            <div className='flex gap-2 w-full'>
              <Input id='name' name='name' placeholder="Filter by name" className='w-1/4 flex-grow' value={name} onChange={event => {setName(event.target.value)}}/>

              <Select value={course} onValueChange={setCourse}>
                <SelectTrigger className='w-1/4 flex-grow'>
                  <SelectValue placeholder='Filter by course'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='All'>All</SelectItem>
                    <SelectItem value='BS-CS'>BS-CS</SelectItem>
                    <SelectItem value='BS-DS'>BS-DS</SelectItem>
                    <SelectItem value='BS-IS'>BS-IS</SelectItem>
                    <SelectItem value='BS-IT'>BS-IT</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <RadioGroup className='flex' value={gender} onValueChange={setGender}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="r1" />
                  <Label htmlFor="r1">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="r2" />
                  <Label htmlFor="r2">Female</Label>
                </div>
              </RadioGroup>

              <div className='w-1/4 flex flex-grow gap-1'>
                <Input value={minAge} onChange={(event) => {
                  if (event.target.value === '') {
                    setMinAge('')
                    return
                  }
                  setMinAge(Number(event.target.value))
                }} id='min-age' name='min-age' placeholder="Min age" type='number' min='0' />
                <Input value={maxAge} onChange={(event) => {
                  if (event.target.value === '') {
                    setMaxAge('')
                    return
                  }
                  setMaxAge(Number(event.target.value))
                }} id='max-age' name='max-age' placeholder="Max age" type='number' min='0' />
              </div>

            </div>
          </div>

        </div>

        <Table className='border'>
          <TableHeader className='bg-slate-200'>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student, idx) => {
              const id = student.id as number;

              return (
              <TableRow key={`row-${idx}`}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>{student.gender.slice(0,1).toUpperCase() + student.gender.slice(1)}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell className='space-x-2'>
                  <EditStudentButton student={student} />
                  <DeleteStudentButton id={id} deleteStudent={deleteStudent} />
                </TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
