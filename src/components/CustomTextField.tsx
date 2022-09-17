import { CustomTextFieldType } from '../types/CustomTextFields.types';
import { CustomTextFieldStyle } from './CustomTextFieldStyle';
export const CustomTextField = ({
  label,
  name,
  type,
  placeholder,
  validation = {},
  validationFailedMessage = 'Value not valid',
}: CustomTextFieldType): JSX.Element => {
  return <CustomTextFieldStyle>{name}</CustomTextFieldStyle>;
};
