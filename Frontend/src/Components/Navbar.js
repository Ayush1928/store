import { ProductionQuantityLimitsRounded, Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Container = styled.div`
  height: 8vh;
  padding: 1.25vh 3vw 0;
  position: fixed;
  background-color: rgb(108, 169, 184);
  width: 94vw;
  z-index: 999;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Div1 = styled.div`
  flex: 1;
`;

const SearchBox = styled.div`
  border: 1px solid gray;
  display: flex;
  opacity: 70%;
  align-items: Center;
  width: 13vw;
  height: 4vh;
  background-color: white;
`;
const Input = styled.input`
  border: none;
  height: 3.5vh;
  margin-left: 3px;
  &:focus {
    outline: none;
  }
`;
const Div2 = styled.div`
  flex: 1;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
`;
const Div3 = styled.div`
  flex: 1;
  text-align: end;
  display: flex;
  justify-content: flex-end;
  margin-right: 1vw;
`;
const Div3Item = styled.div`
  margin-left: 1vw;
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Div1>
          <SearchBox>
            <Input placeholder="Search" />
            <Search style={{ cursor: "pointer" }} />
          </SearchBox>
        </Div1>
        <Div2>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Store
          </Link>
        </Div2>
        <Div3>
          <Div3Item>Register</Div3Item>
          <Div3Item>Login</Div3Item>
          <Link to="/cart">
            <Div3Item>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Div3Item>
          </Link>
        </Div3>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
