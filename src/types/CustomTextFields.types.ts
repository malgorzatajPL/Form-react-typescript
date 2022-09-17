export type CustomTextFieldType = {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  validation?: {
    required?: boolean;
    maxLength?: number;
    pattern?: RegExp;
    validate?: (number: number) => false | Promise<boolean | undefined>;
  };
  validationFailedMessage?: string | undefined;
};
