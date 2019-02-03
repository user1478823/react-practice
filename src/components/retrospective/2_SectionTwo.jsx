import React, { Component } from "react";
import styled from "styled-components";

import Image from "./../../assets/retrospective/pic02.jpg";

export default class SectionTwo extends Component {
  state = {};
  render() {
    return (
      <Section>
        <Content>
          <Img src={Image} alt="" />
          <Title>AT NAM ACCOMMODARE INTELLE VIS NONUMY TRITANI</Title>
          <Body>
            Mei ea accusam molestie, sonet ubique detracto ea qui. Corpora
            omnesque interesset eu sea. Eum ex omnes recteque. Ludus libris
            iisque mea at, vocent hendrerit id.
          </Body>
          <Button>MORE</Button>
        </Content>
      </Section>
    );
  }
}

const Section = styled.section`
  padding: 2em 0 2em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
`;

const Content = styled.div`
  background-color: #fafafa;
  margin: 1em;
  @media (min-width: 576px) {
    margin 2em;
  }
  @media (min-width: 768px) {
    width: 600px;
    margin: 0;
  }
  @media (min-width: 980px) {
    width: 950px;
    display: grid;
    grid-template-areas:
      "title  title    image image image"
      "body   body     image image image"
      "body   body     image image image"
      "button button   image image image";
  }
  @media (min-width: 1280px) {
    width: 1100px;
  }
  @media (min-width: 1680px) {
    width: 1200px;
  }
`;

export const Img = styled.img`
  grid-area: image;
  width: 100%;
  height: auto;
`;

const Title = styled.p`
  grid-area: title;
  color: #555;
  font-weight: 900;
  font-size: 1.4rem;
  padding: 1em 2em 0 1.5em;
  @media (min-width: 1280px) {
    font-size: 1.6rem;
  }
`;

const Body = styled.p`
  grid-area: body;
  color: #838383;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.5em;
  padding: 1em 2em 0.8em 2em;
`;

const Button = styled.button`
  grid-area: button;
  height: 45px;
  width: 150px;
  margin-left: 2em;
  margin-bottom: 1em;
  background-color: #fff;
  color: #51baa4;
  border: 2px solid #51baa4;
  border-radius: 30px;
  font-weight: 900;
  &:hover {
  }
`;