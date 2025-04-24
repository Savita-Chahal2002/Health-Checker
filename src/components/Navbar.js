import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${props => props.theme.primary};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const DropdownContent = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  background-color: ${props => props.theme.background};
  min-width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.text};
`;

const DropdownItem = styled(Link)`
  color: ${props => props.theme.text};
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
`;

const bodyParts = [
  { name: 'Heart', path: '/checker/heart' },
  { name: 'Lungs', path: '/checker/lungs' },
  { name: 'Brain', path: '/checker/brain' },
  { name: 'Liver', path: '/checker/liver' },
  { name: 'Kidneys', path: '/checker/kidneys' },
  { name: 'Stomach', path: '/checker/stomach' },
];

function Navbar({ toggleTheme, isDarkMode }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Nav>
      <StyledLink to="/">Health Checker</StyledLink>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/bmi">BMI Calculator</StyledLink>
        <Dropdown>
          <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Body Parts
          </DropdownButton>
          <DropdownContent isOpen={isDropdownOpen}>
            {bodyParts.map((part) => (
              <DropdownItem
                key={part.name}
                to={part.path}
                onClick={() => setIsDropdownOpen(false)}
              >
                {part.name}
              </DropdownItem>
            ))}
          </DropdownContent>
        </Dropdown>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? '☀️' : '🌙'}
        </ThemeToggle>
      </NavLinks>
    </Nav>
  );
}

export default Navbar; 