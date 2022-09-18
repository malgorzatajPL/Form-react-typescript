import { useForm } from 'react-hook-form';
import { IFormValues } from '../types/CustomTextFields.types';
import { Error, InputTextField } from './CustomTextFieldStyle';
import { MainComponentStyle } from './MainComponent.style';

export default function MainComponent() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    alert(JSON.stringify(data));
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
        <Error>{errors.firstName && 'First name is required'}</Error>
        <InputTextField
          {...register('lastName', {
            required: true,
            minLength: 2,
            maxLength: 50,
          })}
        />
        <Error>{errors.lastName && 'Last name is required'}</Error>
        <InputTextField
          {...register('email', {
            required: true,
            minLength: 2,
            maxLength: 100,
          })}
          type='email'
        />
        <Error>{errors.email && 'Email is required'}</Error>
        <InputTextField
          {...register('password', {
            required: true,
            minLength: 8,
            maxLength: 50,
          })}
          type='password'
        />
        <Error>{errors.password && 'Password is required'}</Error>
        <input type='submit' />
      </form>
    </MainComponentStyle>
  );
}
