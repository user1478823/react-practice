import styled from "styled-components";

export const PrimaryColor = `#f05f40`;

export const Button = styled.button`
  border-style: solid;
  border-width: 2px;
  border-radius: 30px;
  font-weight: 900;
  padding: 0.8em 1.8em;
  width: 200px;
  font-size: 1rem;
`;

export const Hr = styled.hr`
  width: 10%;
  height: 2px;
  margin-left: 45% !important;
  margin-right: 45% !important;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  border: none; //remove default style
  border-bottom: 1px solid; //apply style
  @media screen and (min-width: 768px) {
    margin-top: 2em;
    margin-bottom: 2em;
  }
`;