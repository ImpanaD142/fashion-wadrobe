import React, { useState } from 'react';
import styled from "styled-components"; 
import GenerateImageForm from "../components/GenerateImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard";

const Container = styled.div`
  height: 100%;
  min-height: 300px;
  overflow-y: auto; // Changed from 'scroll' to 'auto' for better scrolling behavior
  background: ${({ theme }) => theme.background}; 
  padding: 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  height: fit-content;
  max-width: 1400px;
  gap: 8%;
  padding: 32px 0;
  display: flex;
  flex-direction: column; // Changed to 'column' to ensure stacking on smaller screens
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  // Ensure the 'photo' URL exists before rendering the card
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          createPostLoading={createPostLoading}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
          setCreatePostLoading={setCreatePostLoading}
        />
        {/* Only show the GeneratedImageCard if there is a photo */}
        {post?.photo ? (
          <GeneratedImageCard src={post.photo} loading={generateImageLoading} />
        ) : (
          <p>No image generated yet. Generate one using the form above.</p>
        )}
      </Wrapper>
    </Container>
  );
};

export default CreatePost;

