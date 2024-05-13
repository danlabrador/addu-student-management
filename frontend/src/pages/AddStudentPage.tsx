import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFormActions } from "../hooks/useFormActions";

export const AddStudentPage = () => {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } = useFormActions();
  
  return (
    <Card className='m-8'>
      <CardHeader>
        <CardTitle>Add New Student</CardTitle>
      </CardHeader>
      <CardContent>

        <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-7 items-center gap-x-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input {...register('name')} type='text' placeholder='Full Name' className="col-span-6 border py-2 px-3 rounded-md text-sm" />
          {<div className='text-red-500 text-right col-span-7 h-6'>{errors.name && errors.name.message}</div>}
          </div>

          <div className="grid grid-cols-7 items-center gap-x-4">
            <label htmlFor="course" className="text-right">
              Course
            </label>
            <select {...register('course')} className="col-span-6 border py-2 px-3 rounded-md text-sm" >
              <option value=''>Select a course</option>
              <option value='BS-CS'>BS-CS</option>
              <option value='BS-DS'>BS-DS</option>
              <option value='BS-IS'>BS-IS</option>
              <option value='BS-IT'>BS-IT</option>
            </select>
            {<div className='text-red-500 text-right col-span-7 h-6'>{errors.course && errors.course.message}</div>}
          </div>



          <div className="grid grid-cols-7 items-center gap-x-4">
            <label htmlFor='gender' className='text-right'>
              Gender
            </label>
              <div className="flex items-center space-x-2">
                <input type='radio'  {...register('gender')} value="male" id="r1" />
                <label htmlFor="r1">Male</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type='radio' {...register('gender')} value="female" id="r2" />
                <label htmlFor="r2">Female</label>
              </div>
          {<div className='text-red-500 text-right col-span-7 h-6'>{errors.gender && errors.gender.message}</div>}
          </div>

          <div className="grid grid-cols-7 items-center gap-x-4">
            <label htmlFor="username" className="text-right">
              Age
            </label>
            <input {...register('age')} type='number' placeholder='Age' className="col-span-6 border py-2 px-3 rounded-md text-sm" />
          {<div className='text-red-500 text-right col-span-7 h-6'>{errors.age && errors.age.message}</div>}
          </div>

          <Button disabled={isSubmitting} type='submit'>{isSubmitting ? 'Loading...' : 'Submit'}</Button>


        </form>
      </CardContent>
    </Card>
  );
};
