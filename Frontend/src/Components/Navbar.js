import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../Redux/apiCalls";
import LogoutIcon from '@mui/icons-material/Logout';

const Container = styled.div`
  height: 8vh;
  padding: 1.25vh 3vw 0;
  position: fixed;
  background-color: rgb(108, 169, 184);
  width: 100%;
  z-index: 999;

  @media screen and (min-width: 769px) {
    width: 94vw;
    padding: 1.25vh 3vw 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Div1 = styled.div`
  width: 100%;
  display: flex;
  flex: 100%;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
`;

const Div2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CartButton = styled.div`
  @media screen and (max-width: 769px) {
    margin-right: 5vw;
  }
  z-index: 2;
`;

const HamburgerButton = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 1vw;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const HamburgerIcon = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: white;
  margin-bottom: 5px;

  &:before,
  &:after {
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    background-color: white;
  }

  &:before {
    transform: translateY(-8px);
  }

  &:after {
    transform: translateY(8px);
  }
`;

const HamburgerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  backdrop-filter: ${(props) => (props.isOpen ? "blur(4px)" : "none")};
  transition: backdrop-filter 0.3s ease;
  z-index: 9999;
`;
const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 9999;
`;

const CloseIcon = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: white;
  transform: rotate(45deg);
  &:before {
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    background-color: white;
    transform: rotate(-90deg);
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StoreLink = styled(Link)`
  text-decoration: none;

  color: black;
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Div2Item = styled.div`
  font-size: 1rem;
  margin-right: 1vw;
  margin-left: 2vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(currentUser));
    navigate("/register");
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Wrapper>
        <HamburgerButton onClick={handleMenuToggle}>
          <HamburgerIcon />
        </HamburgerButton>
        <Div1>
          <StoreLink to="/">ClothesCorner</StoreLink>
          <Div2>
            <Link to="/cart">
              <CartButton>
                <Badge
                  badgeContent={quantity}
                  color="primary"
                  style={{ zIndex: "2" }}
                >
                  <ShoppingCartOutlinedIcon
                    style={{ color: "black", textDecoration: "none" }}
                  />
                </Badge>
              </CartButton>
            </Link>
            <Div2Item><LogoutIcon onClick={handleLogout}/></Div2Item>
          </Div2>
        </Div1>
      </Wrapper>
      <HamburgerMenu isOpen={isMenuOpen}>
        <CloseButton onClick={handleMenuToggle}>
          <CloseIcon />
        </CloseButton>
        <MenuContent>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/products/men">Men</MenuItem>
          <MenuItem to="/products/women">Women</MenuItem>
          <MenuItem to="/products/kids">Kids</MenuItem>
          <MenuItem to="/cart">Cart</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuContent>
      </HamburgerMenu>
    </Container>
  );
};

export default Navbar;
