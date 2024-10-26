/** @format */
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<Home />
						}
					/>
					<Route
						path="/about-us"
						element={
							<AboutUs />
						}
					/>
					<Route
						path="/services"
						element={
							<Services />
						}
					/>
					<Route
						path="/portfolio"
						element={
							<Portfolio />
						}
					/>
					<Route
						path="/blog"
						element={
							<Blog />
						}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
