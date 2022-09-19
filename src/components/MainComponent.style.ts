import styled from 'styled-components';
import { fontSize, theme } from '../theme/theme';

export const MainComponentStyle = styled.div`
  width: 500px;
  height: 550px;
  background-color: ${theme.palette.common.main};
  border-radius: 16px;
  box-shadow: 10px 10px 10px ${theme.palette.common.light};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  color: ${theme.palette.common.white};
  font-family: ${theme.fontFamily.main};
  font-size: ${fontSize(30)};
  letter-spacing: 1px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Submit = styled.button`
  padding: 10px 20px;
  color: ${theme.palette.common.secondary};
  font-family: ${theme.fontFamily.main};
  background-color: ${theme.palette.common.main};
  border: 1px solid ${theme.palette.common.white};
  text-transform: uppercase;
  margin: 15px 0;
  cursor: pointer;
`;
