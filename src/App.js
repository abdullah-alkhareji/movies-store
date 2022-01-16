import "./App.css";
import Home from "./components/Home";
import MoviesList from "./components/MoviesList";
import { products } from "./products";

function App() {
	return (
		<>
			<Home />
			<MoviesList />
		</>
	);
}

export default App;
