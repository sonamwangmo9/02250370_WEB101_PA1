const movies = [
  {
    title: "Movie 1",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Movie 2",
    image: "https://via.placeholder.com/150"
  }
];

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";

function App() {
  const movies = [
    { title: "Movie 1", image: "https://via.placeholder.com/150" },
    { title: "Movie 2", image: "https://via.placeholder.com/150" }
  ];

  return (
    <>
      <Navbar />
      <Banner />
      <Row title="Trending" movies={movies} />
      <Row title="Top Rated" movies={movies} />
    </>
  );
}

export default App;