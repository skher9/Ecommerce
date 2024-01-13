import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { AllProducts } from "../data";
import CartContext from "../CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 40vh;
`;

const Wrapper = styled.div``;

const Product = styled.div`
  display: grid;
  margin-top: 5px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  grid-row-gap: 30px;
  margin: 20px;
`;

const Image = styled.img`
  border-style: solid;
  width: 200px;
`;

const Info = styled.div`
  display: flex;
  margin: 20px;
`;

const ProductDetail = styled.div`
  margin-left: 30px;
  margin-top: 50px;
`;

const Details = styled.div`
  margin-top: 20px;
`;

const ProductName = styled.span``;

const ProductId = styled.span`
  margin-top: 20px;
`;

const ProductSize = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px;
  height: 40px;
  background: transparent;
  width: 200px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Wishlist = () => {
  const { id, name } = useParams();
  console.log(name);
  const context = useContext(CartContext);

  const totalProducts = context.favProduct;

  const [favItems, setfavItems] = useState(() => {
    return totalProducts.map((product) => {
      const { id, name } = product;
      const products = AllProducts[name];
      let favItem = products.filter((product) => {
        return product.id === id;
      });
      return favItem[0];
    });
  });

  const handleClick = (name, id) => {
    context.updateCart(id, name);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to={`/`}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({favItems.length})</TopText>
          </TopTexts>
          <Link to={`/cart/:id`}>
            <TopButton type="filled">GO TO CART</TopButton>
          </Link>
        </Top>
        <Wrapper>
          <Product>
            {favItems.map((e) => {
              return (
                <Info>
                  <Image src={e.src} />
                  <ProductDetail>
                    <ProductName>
                      <b>Product:</b> {e.name}
                    </ProductName>

                    <Details>
                      <ProductId>
                        <b>Price:</b> {e.price}
                      </ProductId>
                      <br />
                      <ProductSize>
                        <b>Size:</b> S
                      </ProductSize>
                    </Details>
                    <Link to={`/cart/${id}/${name}`}>
                      <Button
                        onClick={() => {
                          handleClick(name, e.id);
                        }}
                      >
                        ADD TO CART
                      </Button>
                    </Link>
                  </ProductDetail>
                </Info>
              );
            })}
          </Product>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Wishlist;
