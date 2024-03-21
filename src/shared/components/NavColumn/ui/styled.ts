import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Title = styled.h3`
  font-size: 18px;
  line-height: 136%;
  font-weight: 800;
  margin-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 220px;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const NavLinkStyled = styled(NavLink)`
  font-size: 16px;
  line-height: 136%;
  font-weight: 400;
`;

export { Container, Title, List, ListItem, NavLinkStyled };
