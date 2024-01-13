import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AllProducts } from "../data";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import CartContext from "../CartContext";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  margin-bottom: 100px;
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

const Info = styled.div`
  display: flex;
  margin: 20px;
`;

const Product = styled.div`
  margin: 20px;
`;

const ProductDetail = styled.div`
  margin-left: 30px;
  margin-top: 50px;
`;

const Image = styled.img`
  border-style: solid;
  width: 200px;
`;

const Details = styled.div`
  margin-top: 20px;
`;

const ProductName = styled.div`
  display: flex;
`;

const Name = styled.span``;

const ProductId = styled.span`
  margin-top: 20px;
`;

const ProductSize = styled.div`
  margin-top: 20px;
`;

const Summary = styled.div`
  position: absolute;
  right: 0;
  margin-right: 10px;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-bottom: 700px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Wishlist = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  margin-top: 10px;
`;

const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  right: 0%;
  left: 50%;
`;

const Cart = () => {
  const context = useContext(CartContext);

  const totalProducts = context.cartProduct;

  const [cartItems, setcartItems] = useState(() => {
    return totalProducts.map((product) => {
      const { id, name } = product;
      const products = AllProducts[name];
      let finalItem = products.filter((product) => {
        return product.id === id;
      });
      return finalItem[0];
    });
  });

  const ship = 299;
  const Total = useRef(0);

  function Add(price) {
    Total.current = Total.current + price;
  }

  const removeItem = (e) => {
    console.log("ghvdjbsjkdsndv");
    console.log(e);
  };

  return (
    <CartContext.Provider value={{ name: "Shravani" }}>
      <Navbar />
      <Container>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to={`/`}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({cartItems.length})</TopText>
          </TopTexts>
          <Link to={`/wishlist/:id`}>
            <TopButton type="filled">WISHLIST</TopButton>
          </Link>
        </Top>
        <Wrapper>
          <Product>
            {cartItems.map((e) => {
              return (
                <Info>
                  <Image src={e.src} />
                  <ProductDetail>
                    <ProductName>
                      <Name>
                        <b>Product:</b> {e.name}
                      </Name>
                      <RemoveButton
                        onClick={(val) => {
                          removeItem(e);
                        }}
                      >
                        <RemoveShoppingCartOutlinedIcon />
                      </RemoveButton>
                    </ProductName>

                    <Details>
                      <ProductId>
                        <b>Price:</b> ₹{e.price}
                      </ProductId>
                      <br />
                      {Add(e.price)}
                      <ProductSize>
                        <b>Size:</b> S
                      </ProductSize>
                      <Wishlist>ADD TO WISHLIST</Wishlist>
                    </Details>
                  </ProductDetail>
                </Info>
              );
            })}
          </Product>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹{Total.current}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹{ship}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹{Total.current + ship}</SummaryItemPrice>
            </SummaryItem>
            <Link to={`/confirm/${Total.current + ship}/${cartItems.length}`}>
              <Button>CHECKOUT NOW</Button>
            </Link>
          </Summary>
        </Wrapper>
      </Container>
      <Footer />
    </CartContext.Provider>
  );
};

export default Cart;
