import styled from 'styled-components';
import { FaHamburger } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  
`;

export const NavLink = styled.a`;
  color: #e31837;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin-right: 4rem;
  font-family: 'Insaniburger', sans-serif;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
  color: #e31837;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaHamburger)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;