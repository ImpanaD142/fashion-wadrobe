import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { DownloadRounded } from '@mui/icons-material'; // Importing Download icon
import Avatar from '@mui/material/Avatar'; // Importing Avatar from Material-UI
import FileSaver from "file-saver";

const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black};
    transform: scale(1.05);
  }
  &:nth-child(7n+1) {
    grid-column: auto / span 2;
    grid-row: auto / span 2;
  }
`;

const HoverOverlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white};
  transition: opacity 0.3s ease;
  border-radius: 6px;
  justify-content: flex-end;
  padding: 12px;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Prompt = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.white};
`;

const Author = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.white};
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ImageCard = ({ item }) => { // Destructured item from props
  return (
    <Card>
      <LazyLoadImage 
        alt={item?.prompt}
        style={{ borderRadius: "12px" }}
        width="100%"
        src={item?.photo}
      />
      <HoverOverlay>
        <Prompt>{item?.prompt}</Prompt>
        <div style={{ // Moved the style prop inside a div
          width: "100%",
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}>
          {/* This div can be used for additional content if needed */}
        </div>
        <Author>
          <Avatar style={{ width: '32px', height: '32px' }}>{item?.author[0]}</Avatar>
          {item?.author}
        </Author>
        <DownloadRounded onClick={() => FileSaver.saveAs(item?.photo, "download.jpg")} /> {/* Corrected download file name */}
      </HoverOverlay>
    </Card>
  );
};


