import { React, useRef } from "react";
import { AllProducts, categories } from "../data";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { sliderItems } from "../data";
import Product from "./Product";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import CartContext from "../CartContext";
import { type } from "@testing-library/user-event/dist/type";

const Container = styled.div`
  backgroud-color: black;
  padding: 20px;
  text-align: center;
  display: grid;
  margin-top: 30px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 400px;
  grid-row-gap: 30px;
  margin-left: 20px;
  width: 50px;
  border-color: black;
`;
const Wrapper = styled.div`
  background-color: white;
  width: 50px;
`;

const ImgContainer = styled.div``;

const Image = styled.img`
  height: 400px;
  width: 300px;
  border-style: solid;
  border-color: black;
`;

const ImageInfo = styled.div`
  width: 300px;
`;

const Button = styled.button`
  border-radius: 7px;
  cursor: pointer;
  height: 30px;
  background: transparent;
  width: 150px;
`;

const Heading = styled.div`
  white-space: normal;
`;

const Name = styled.p`
  display: inline-block;
  font-weight: bold;
  font-style: italic;
`;

const Price = styled.p``;

const Items = () => {
  const context = useContext(CartContext);
  const { id } = useParams();
  console.log(typeof id);
  const receivedId = useRef(parseInt(id));
  const category = useRef(null);

  if (receivedId.current <= 3 && receivedId.current > 0) {
    sliderItems.forEach((ele) => {
      if (receivedId.current == ele.id) {
        category.current = ele.keyword;
      }
    });
  } else if (receivedId.current > 3) {
    categories.forEach((e) => {
      if (receivedId.current == e.id) {
        category.current = e.keyword;
      }
    });
  }

  const handlefavClick = (name, id) => {
    context.updateWishlist(id, name);
  };

  //const Data = AllProducts.Jacket || AllProducts.Jeans || AllProducts.Dress;

  const Data = AllProducts[category.current + ""];

  return (
    <>
      <Navbar />
      <Container>
        {Data.map((e) => {
          return (
            <Wrapper>
              <ImgContainer>
                <Image src={e.src} />
              </ImgContainer>
              <ImageInfo>
                <Heading>
                  <Name>{e.name}</Name>
                </Heading>
                <Price>Price: ₹{e.price}</Price>
                <Link to={`/product/${e.id}/${category.current}`}>
                  <Button>SHOP NOW</Button>
                </Link>
                <br />
                <br />
                <Link to={`/wishlist/${e.id}/${category.current}`}>
                  <Button
                    onClick={() => {
                      handlefavClick(category.current, e.id);
                    }}
                  >
                    Add To Wishlist
                  </Button>
                </Link>
              </ImageInfo>
            </Wrapper>
          );
        })}
      </Container>

      <Footer />
    </>
  );
};

export default Items;
