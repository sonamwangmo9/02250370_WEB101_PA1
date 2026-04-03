import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import "./App.css";

function App() {
  const trending = [
    { image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" },
    { image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
    { image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg" }
  ];

  const topRated = [
    { image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg" },
    { image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg" },
    { image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg" }
  ];

  return (
    <>
      <Navbar />
      <Banner />
      <Row title="Trending Now" movies={trending} />
      <Row title="Top Rated" movies={topRated} />
    </>
  );
}

export default App;