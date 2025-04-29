import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "./button";
 // Ensure this path is correct and matches the file name/casing.
import AddRounded from "@mui/icons-material/AddRounded";
import ExploreRounded from "@mui/icons-material/ExploreRounded";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.navbar};
  font-weight: bold;
  font-size: 22px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <Container>
      Gen AI
      {path[1] === "post" ? (
        <Button
          onClick={() => navigate("/Home")}
          text="Explore Posts"
          leftIcon={<ExploreRounded style={{ fontSize: "18px" }} />}
        />
      ) : (
        <Button
          onClick={() => navigate("/create-post")}
          text="Create new post"
          leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
        />
      )}
    </Container>
  );
};

export default Navbar;

