import React from "react";
import styled from "styled-components";

// Styled button component
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary}; // Primary color from theme
  color: ${({ theme }) => theme.textOnPrimary}; // Text color from theme
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover}; // Hover state color from theme
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
    cursor: not-allowed;
  }
`;

// Button component
const Button = ({ text, onClick, leftIcon, disabled }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {leftIcon && <span style={{ marginRight: "8px" }}>{leftIcon}</span>}
    {text}
  </StyledButton>
);

export default Button;
