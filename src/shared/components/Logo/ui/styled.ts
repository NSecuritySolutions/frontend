import styled from 'styled-components';
import { TLogoImageProps } from '../types/types';
import { NavLink } from 'react-router-dom';

//TODO сделать когда будет лого готов у дизайнеров
const LogoContainer = styled.div`
  display: flex;
  width: 136px;
  height: 40px;
`;

//TODO сделать когда будет лого готов у дизайнеров: добавить стили если лого будет с текстом
const LogoLink = styled(NavLink)`
  text-decoration: none;
`;

const LogoImage = styled.img<TLogoImageProps>`
  background: transparent;
`;

export { LogoContainer, LogoImage, LogoLink };
