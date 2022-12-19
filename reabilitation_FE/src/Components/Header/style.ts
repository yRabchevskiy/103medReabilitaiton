import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NawBarContainer = styled.nav`
  width: 100%;
  height: 64px;
  background: var(--navBg);
  padding: 0px 20px;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 22px 0 rgba(69, 60, 119, 0.5);
`;

export const NavBarLink = styled(Link)`
  height: 100%;
  margin-right: 12px;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  color: var(--textPrimary);
  padding: 12px 16px;
  border: none;
  border-bottom: 4px solid transparent;
  transition: 0.3s linear;
  transition-property: border-color, color;
  &:active,
  &.active {
    color: var(--textPrimary);
  }
  &.active {
    border-bottom: 4px solid;
    border-bottom-color: rgba(255, 255, 255, 1);
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    transition: 0.3s linear;
    transition-property: border-color, color;
  }
`;

export const Logo = styled.div`
  width: 48px;
  height: 48px;
  margin: auto 16px auto 0;
`;

export const Logout = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: auto 0 auto auto;
`;
