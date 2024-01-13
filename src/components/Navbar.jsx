import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  color: black;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const [category, setcategory] = useState("");

  const handleSearch = (e) => {
    const item = e.target.value;
    setcategory(item);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              type="text"
              placeholder="Search"
              value={category}
              onChange={handleSearch}
            />
            <Link to={`/details/${category}`}>
              <Search style={{ color: "gray", fontSize: 16 }} />
            </Link>
          </SearchContainer>
        </Left>
        <Center>
          <Image src="https://t4.ftcdn.net/jpg/03/37/56/75/240_F_337567532_UcwFDd9U8oZnm0acBQcHPb9dSPS3rm7B.jpg" />
          <Link to={"/"}>
            <Logo>LifeStyle.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to={`/signin/:id`}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to={`/login/:id`}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Link to={`/wishlist/:id`}>
              <FavoriteBorderOutlinedIcon />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/cart/:id`}>
              <ShoppingCartOutlinedIcon />
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
