import React from 'react';
import styled from 'styled-components';
import Button from './button'; // Ensure correct casing matches your file
import TextInput from './TextInput';
import { AutoAwesome } from '@mui/icons-material';

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6%;
`;

const Desc = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;

const GenerateImageForm = ({
  post,
  setPost,
  createPostLoading,
  GenerateImageLoading,
  setGenerateImageLoading,
  setCreatePostLoading,
}) => {
  const generateImageFun = () => {
    setGenerateImageLoading(true);
    // Additional logic for generating the image can be added here
  };

  const createPostFun = () => {
    setCreatePostLoading(true);
    // Additional logic for creating the post can be added here
  };

  return (
    <Form>
      <Top>
        <Title>Generate Fashion Image</Title>
        <Desc>Provide details to generate your trend.</Desc>
      </Top>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your name"
          name="name"
          value={post.name || ""}
          handleChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <TextInput
          label="Fashion Collection"
          placeholder="Enter your prompt about the trend you need"
          name="prompt"
          rows="8"
          textArea
          value={post.prompt || ""}
          handleChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        <p>** You can post AI generated image to the Community **</p>
      </Body>
      <Actions>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={GenerateImageLoading}
          isDisabled={post.prompt === ""}
          onClick={generateImageFun}
        />
        <Button
          text="Post Image"
          flex
          type="secondary"
          leftIcon={<AutoAwesome />}
          isLoading={createPostLoading}
          isDisabled={post.name === "" || post.prompt === "" || post.photo === ""}
          onClick={createPostFun}
        />
      </Actions>
    </Form>
  );
};

export default GenerateImageForm;



