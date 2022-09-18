import { CustomTextField } from './CustomTextField';
import { MainComponentStyle } from './MainComponent.style';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormValues } from '../types/CustomTextFields.types';

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}
export default function MainComponent() {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    console.log(data);
  };
  return (
    <MainComponentStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomTextField label='First Name' register={register} required />
        <input type='submit' />
      </form>
    </MainComponentStyle>
  );
}
