import styled from 'styled-components';
import { theme } from '../theme/theme';

export const MainComponentStyle = styled.div`
  width: 700px;
  height: 700px;
  background-color: ${theme.palette.common.main};
  border-radius: 16px;
  box-shadow: 10px 10px 10px ${theme.palette.common.light};
  display: flex;
  justify-content: center;
  align-items: center;
`;
