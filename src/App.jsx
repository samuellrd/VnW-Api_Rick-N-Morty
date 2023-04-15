import React, { Component } from "react";
import axios from "axios";
import { Container, Infos, Charaters, Title, Complement } from "./styled";

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

export default class App extends Component {
  state = {
    info: [],
  };

  personagens = async () => {
    const resp = await Api.get();
    console.log(resp.data.results);

    const Itens = resp.data.results.map((item) => {
      return { ...item };
    });

    this.setState({
      info: Itens,
    });
  };

  componentDidMount() {
    this.personagens();
  }

  render() {
    return (
      <>
        <Title>API Rick And Morty</Title>
        <Charaters>
          {this.state.info.map((item) => (
            <Container>
              <img src={item.image} alt={item.name} />
              <Infos>
                <h2>{item.name}</h2>
                <p>
                  {item.status} - {item.species}
                </p>
                <Complement>
                  <p>Origem:</p>
                  <p>{item.origin.name}</p>
                </Complement>
                <Complement>
                  <p>Última vez visto:</p>
                  <p>{item.location.name}</p>
                </Complement>
              </Infos>
            </Container>
          ))}
        </Charaters>
      </>
    );
  }
}
