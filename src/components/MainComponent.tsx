import { useForm } from 'react-hook-form';
import { IFormValues } from '../types/CustomTextFields.types';
import { InputTextField } from './CustomTextFieldStyle';
import { MainComponentStyle } from './MainComponent.style';

export default function MainComponent() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    console.log(data);
  };
  return (
    <MainComponentStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextField
          {...register('firstName', {
            required: true,
            minLength: 2,
            maxLength: 50,
          })}
        />
        {errors.firstName && 'First name is required'}
        <InputTextField
          {...register('lastName', {
            required: true,
            minLength: 2,
            maxLength: 50,
          })}
        />
        {errors.lastName && 'Last name is required'}
        <InputTextField
          {...register('age', { required: true })}
          type='number'
          min='10'
          max='100'
        />
        {errors.age && 'Age is required'}
        <InputTextField
          {...register('email', {
            required: true,
            minLength: 2,
            maxLength: 100,
          })}
          type='email'
        />
        {errors.email && 'Email is required'}
        <InputTextField
          {...register('password', {
            required: true,
            minLength: 8,
            maxLength: 50,
          })}
          type='password'
        />
        {errors.password && 'Password is required'}
        <input type='submit' />
      </form>
    </MainComponentStyle>
  );
}
