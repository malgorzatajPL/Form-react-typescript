import { Path, UseFormRegister } from 'react-hook-form';

export type CustomTextFieldType = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};
export interface IFormValues {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  type?: string;
}
