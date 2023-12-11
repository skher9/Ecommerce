import { Add, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Wishlist from "../pages/Wishlist";
import { AllProducts } from "../data";
import { useContext } from "react";
import CartContext from "../CartContext";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  border-style: solid;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-style: italic;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
  margin-left: 50px;
`;

const PriceContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  margin-top: 20px;
  text-align: center;
`;

const Filter = styled.div`
  margin-left: 50px;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  text-align: center;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  text-align: center;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  height: 30px;
  width: 150px;
  margin-left: 50px;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductDetail = styled.div``;

const Product = () => {
  const context = useContext(CartContext);

  console.log(context);

  const { id, name } = useParams();

  const Data = AllProducts[name];

  const handlefavClick = (name, id) => {
    context.updateWishlist(id, name);
  };

  const handleClick = (name, id) => {
    context.updateCart(id, name);
  };

  return Data.map((e) => {
    if (e.id == id) {
      return (
        <Container>
          <Announcement />
          <Navbar />
          <Wrapper>
            <ImgContainer>
              <Image src={e.src} />
            </ImgContainer>
            <InfoContainer>
              <Title>{e.name}</Title>
              <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                venenatis, dolor in finibus malesuada, lectus ipsum porta nunc,
                at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex,
                eget tristique tortor pretium ut. Curabitur elit justo,
                consequat id condimentum ac, volutpat ornare.
              </Desc>
              <ProductDetail>
                <PriceContainer>
                  <Price>Price: ₹ {e.price}</Price>
                </PriceContainer>
                <Info>
                  <Filter>
                    Size:
                    <FilterSize>
                      {e.size.map((ele) => {
                        return <FilterSizeOption>{ele}</FilterSizeOption>;
                      })}
                    </FilterSize>
                  </Filter>
                  <AmountContainer>
                    Amount: <Remove />
                    <Amount>1</Amount>
                    <Add />
                  </AmountContainer>
                </Info>
                <AddContainer>
                  <Link to={`/cart/${id}/${name}`}>
                    <Button
                      onClick={() => {
                        handleClick(name, e.id);
                      }}
                    >
                      ADD TO CART
                    </Button>
                  </Link>
                  <Link to={`/wishlist/${id}/${name}`}>
                    <Button
                      onClick={() => {
                        handlefavClick(name, e.id);
                      }}
                    >
                      Wishlist
                    </Button>
                  </Link>
                </AddContainer>
              </ProductDetail>
            </InfoContainer>
          </Wrapper>
          <Footer />
        </Container>
      );
    }
  });
};
export default Product;
