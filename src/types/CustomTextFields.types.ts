import { Path, UseFormRegister } from 'react-hook-form';

export type CustomTextFieldType = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};
export interface IFormValues {
  'First Name': string;
  Age: number;
}
