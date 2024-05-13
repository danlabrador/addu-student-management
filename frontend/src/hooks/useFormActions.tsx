import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { createStudentAsync } from "@/services/state/students/studentsThunks";
import { AppDispatch } from "@/services/state/store";
import { useNavigate } from "react-router-dom";

export const useFormActions = () => {
  const schema = z.object({
    name: z.string().min(3, 'Please input a valid name.'),
    course: z.string().refine(value => ['BS-CS', 'BS-DS', 'BS-IS', 'BS-IT'].includes(value), {
      message: 'Please select a course.'
    }),
    gender: z.enum(['male', 'female'] as const, {
      message: 'Please select a gender.'
    }),
    age: z.string().refine(value => parseInt(value) > 0, {
      message: 'Please input a valid age.'
    }),
  });

  type FormFields = z.infer<typeof schema>;


  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    dispatch(createStudentAsync(data));
    navigate('/');
  };

  return { register, handleSubmit, errors, isSubmitting, onSubmit };
};
