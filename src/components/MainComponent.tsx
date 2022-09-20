import { useForm } from 'react-hook-form';
import { IFormValues } from '../types/CustomTextFields.types';
import {
  CustomTextField,
  Error,
  InputTextField,
  LabelTextField,
} from './CustomTextFieldStyle';
import {
  Form,
  Header,
  MainComponentStyle,
  Submit,
} from './MainComponent.style';

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header>Sign in</Header>
        <CustomTextField>
          <LabelTextField>First name</LabelTextField>
          <InputTextField
            {...register('firstName', {
              required: true,
              minLength: 2,
              maxLength: 50,
            })}
          />
          <Error>{errors.firstName && 'First name is required'}</Error>
        </CustomTextField>
        <CustomTextField>
          <LabelTextField>Last name</LabelTextField>
          <InputTextField
            {...register('lastName', {
              required: true,
              minLength: 2,
              maxLength: 50,
            })}
          />
          <Error>{errors.lastName && 'Last name is required'}</Error>
        </CustomTextField>
        <CustomTextField>
          <LabelTextField>Email</LabelTextField>
          <InputTextField
            {...register('email', {
              required: true,
              minLength: 2,
              maxLength: 100,
            })}
            type='email'
          />
          <Error>{errors.email && 'Email is required'}</Error>
        </CustomTextField>
        <CustomTextField>
          <LabelTextField>Password</LabelTextField>
          <InputTextField
            {...register('password', {
              required: true,
              minLength: 8,
              maxLength: 50,
            })}
            type='password'
            autoComplete='new-password'
          />
          <Error>{errors.password && 'Password is required'}</Error>
        </CustomTextField>
        <Submit type='submit'>Submit</Submit>
      </Form>
    </MainComponentStyle>
  );
}
