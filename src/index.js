import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Urban from "./pages/Urban";
import Transitive from "./pages/Transitive";
import GridPractice from "./components/GridPractice";
import ImageSlider from "./components/ImageSlider";

const Main = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/about" component={About} />
			<Route path="/grid" component={GridPractice} />
			<Route path="/slider" component={ImageSlider} />
			<Route path="/urban" component={Urban} />
			<Route path="/transitive" component={Transitive} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(<Main />, document.getElementById('root'));


