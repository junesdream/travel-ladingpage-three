import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Showcase from "./components/Showcase.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import Footer from "./components/Footer.js";
import Destinations from "./components/Destinations.js";
import Error from './components/Error'

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Showcase />
					<Destinations />
				</Route>

				<Route path="/login">
					<Login />
				</Route>

				<Route path="/signup">
					<SignUp />
				</Route>
				<Route path="*">
					<Error />
				</Route>

			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
