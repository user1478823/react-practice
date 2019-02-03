import React, { Component } from "react";
import Header from "./../components/retrospective/0_Header";
import SectionOne from "./../components/retrospective/1_SectionOne";
import SectionTwo from "./../components/retrospective/2_SectionTwo";
import SectionThree from "./../components/retrospective/3_SectionThree";
import SectionFour from "./../components/retrospective/4_SectionFour";
import Footer from "../components/retrospective/Footer/0_Footer";

class Retrospective extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Retrospective;