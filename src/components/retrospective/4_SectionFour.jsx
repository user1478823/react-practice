import React, { Component } from "react";
import styled from "styled-components";

import Image from "./../../assets/retrospective/pic11.jpg";

export default class SectionFour extends Component {
  state = {};
  render() {
    return (
      <Section>
        <div>
          <Title>MAGNA SED CONSEQUAT TEMPUS</Title>
          <Body>
            CONSECTETUR ADIPISICING ELIT LAUDANTIUM EXERCITATIONEM QUASI LABORUM
          </Body>
          <Button>MAGNA FEUGIAT</Button>
        </div>
      </Section>
    );
  }
}

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4em;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`;

const Title = styled.p`
  grid-area: title;
  color: white;
  font-weight: 900;
  font-size: 1.5rem;
  padding: 1em 2em 0 1.5em;
  @media (min-width: 768px) {
    font-size 2rem;
  }
  @media (min-width: 980px) {
    font-size 2.2rem;
  }
  @media (min-width: 1680px) {
    font-size 2.5rem;
  }
`;

const Body = styled.p`
  margin-bottom: 1.5em;
  grid-area: body;
  color: white;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.5em;
  padding: 1em 2em 0.8em 2em;
  @media (min-width: 768px) {
    font-size 1.2rem;
  }
  @media (min-width: 1680px) {
    font-size 1.5rem;
  }
`;

const Button = styled.button`
  padding 1em 2em;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 50px;
  font-weight: 900;
  &:hover {
  }
  @media (min-width: 768px) {
    padding 1em 2.2em;
    font-size: 1rem;
  }
  @media (min-width: 980px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1280px) {
    padding: 1em 2.5em;
    font-size: 1.3rem;
  }
`;
