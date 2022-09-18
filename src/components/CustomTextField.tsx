import { ReactNode } from 'react';
import { CustomTextFieldType } from '../types/CustomTextFields.types';
import {
  CustomTextFieldStyle,
  Error,
  InputTextField,
  LabelTextField,
} from './CustomTextFieldStyle';
export const CustomTextField = ({
  label,
  register,
  required,
}: CustomTextFieldType): JSX.Element => {
  return (
    <CustomTextFieldStyle>
      <LabelTextField>{label}</LabelTextField>
      <InputTextField {...register(label, { required })} />
    </CustomTextFieldStyle>
  );
};
