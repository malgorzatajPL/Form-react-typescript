import styled from 'styled-components';
import { fontSize, theme } from '../theme/theme';

export const CustomTextField = styled.div`
  position: relative;
`;

export const InputTextField = styled.input`
  font-family: ${theme.fontFamily.secondary};
  color: ${theme.palette.common.white}!important;
  box-sizing: border-box;
  display: block;
  border: 3px solid ${theme.palette.common.white};
  background: ${theme.palette.common.main}!important;
  border-radius: 5px;
  outline: none;
  margin: 20px 0;
  padding: 10px;
  min-width: 285px;
  font-size: ${fontSize(16)};
  position: relative;
  :focus {
    background-color: ${theme.palette.common.main}!important;
  }
`;

export const LabelTextField = styled.div`
  position: absolute;
  z-index: 10;
  color: ${theme.palette.common.orange};
  font-family: ${theme.fontFamily.main};
  font-size: ${fontSize(12)};
  background-color: ${theme.palette.common.main};
  padding: 3px 5px;
  left: 10px;
  top: 12px;
  border-radius: 5px;
`;
export const Error = styled.div`
  color: ${theme.palette.common.red};
  font-family: ${theme.fontFamily.main};
  margin-top: -8px;
`;
