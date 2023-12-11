import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/18980532/pexels-photo-18980532/free-photo-of-woman-in-a-black-dress-walking-barefoot-in-a-white-room.jpeg?auto=compress&cs=tinysrgb&w=600")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  border-radius: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #776b5d;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  border-radius: 10px;
`;

const Login = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link to={`/signin/:id`}>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
