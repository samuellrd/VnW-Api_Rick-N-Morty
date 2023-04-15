import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;

    ::selection {
      background-color: #272b33;
      color: #ff9800;
    }
  }

  body {
    background-color: #272b33;
    color: #fff;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  padding: 5vh;
  cursor: pointer;
`;

export const Charaters = styled.section`
  height: 390vh;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-evenly;
`;

export const Container = styled.section`
  min-width: 48vw;
  height: fit-content;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background-color: #3c3e44;

  img {
    height: 37.5vh;
  }
`;

export const Infos = styled.div`
  width: 100%;
  padding: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    width: 25vw;
    font-weight: 900;
    font-size: 1.5rem;
    cursor: pointer;

    :hover {
      color: #ff9800;
    }
  }
`;

export const Complement = styled.div`
  height: 7vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p:nth-child(1) {
    font-weight: 800;
    color: #9e9e9e;
  }
`;

export default GlobalStyle;
