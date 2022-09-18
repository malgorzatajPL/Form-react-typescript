import styled from 'styled-components';
import { fontSize, theme } from '../theme/theme';

export const InputTextField = styled.input`
  font-family: ${theme.fontFamily.secondary};
  color: ${theme.palette.common.white};
  box-sizing: border-box;
  display: block;
  border: 3px solid ${theme.palette.common.white};
  background: ${theme.palette.common.third};
  border-radius: 5px;
  outline: none;
  margin: 20px 0;
  padding: 10px;
  min-width: 285px;
  font-size: ${fontSize(16)};
`;

export const LabelTextField = styled.div``;
export const Error = styled.div`
  color: ${theme.palette.common.red};
  font-family: ${theme.fontFamily.main};
  margin-top: -8px;
`;

export const Submit = styled.div``;
