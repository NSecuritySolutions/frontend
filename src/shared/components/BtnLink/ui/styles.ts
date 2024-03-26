import styled from 'styled-components';
import { TStyledBtnLinkProps } from '../types/types';
import colors from 'src/shared/constants/colors/index';

const StyledBtnLink = styled.a<TStyledBtnLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${colors.btnPrimary};
  color: ${props => props.color || '#101010'};
  text-decoration: none;
  border: none;
  border-radius: 15px;
  font-size: ${props => props.size};
  font-weight: 800;
  cursor: pointer;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};

  &:hover {
    background-color: ${colors.btnPrimaryHover};
  }
`;
export { StyledBtnLink };
