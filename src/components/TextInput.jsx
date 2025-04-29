import React from 'react';
import styled from 'styled-components';

// Styled components
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary || '#fff'};
`;

const InputField = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.text_secondary || '#666'};
`;

const TextAreaField = styled.textarea`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.text_secondary || '#666'};
`;

const TextInput = ({
  label,
  value,
  handleChange,
  placeholder,
  type = 'text',
  name,
  textArea = false,
  rows = 4
}) => {
  const handleInputChange = (e) => {
    if (typeof handleChange === 'function') {
      handleChange(e);
    }
  };

  return (
    <InputWrapper className="text-input">
      {label && <Label>{label}</Label>}
      {textArea ? (
        <TextAreaField
          name={name}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          rows={rows}
          className="text-input-field"
        />
      ) : (
        <InputField
          type={type}
          name={name}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="text-input-field"
        />
      )}
    </InputWrapper>
  );
};

export default TextInput;



