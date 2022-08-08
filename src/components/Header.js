import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiBowlOfRice } from "react-icons/gi";

const Header = (props) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Nav>
        <h1 style={{ color: "black" }}>
          강남밥상
          <GiBowlOfRice style={{ marginLeft: "0.1em" }} />
        </h1>
      </Nav>
    </Link>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;
