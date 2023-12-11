import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://t4.ftcdn.net/jpg/02/43/97/43/240_F_243974396_S89Za4BOTMioes5tIw3Y7MMfkjXrJ7xb.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  color: #ba704f;
  margin-left: 500px;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 40px;
`;

const Info = styled.h3`
  font-size: 20px;
  margin-left: 10px;
`;

const Confirmation = () => {
  const { total, items } = useParams();

  console.log(total, items);

  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Congratulations...!!!</Title>
          <Info>
            Your Order for {items} items with the total of ₹{total} has been
            placed Successfully!!!
          </Info>
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Confirmation;
