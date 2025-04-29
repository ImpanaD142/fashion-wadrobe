import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.arrow + 80};
  border-radius: 20px;
  width: 100%; 
  max-width: 600px; 
  min-height: 200px; 
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 24px;
  background: ${({ theme }) => theme.yellow};
`;

const Message = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin: 0;
`;

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress style={{ color: "inherit", width: "24px", height: "24px" }} />
          <Message>Generating your image...</Message>
        </>
      ) : (
        <>
          {src ? (
            <Image src={src} alt="Generated Fashion" />
          ) : (
            <Message>Write a prompt to generate the image.</Message>
          )}
        </>
      )}
    </Container>
  );
};

export default GeneratedImageCard;




