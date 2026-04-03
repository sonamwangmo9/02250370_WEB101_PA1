import MovieCard from "./MovieCard";

function Row({ title, movies }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie, index) => (
          <MovieCard key={index} image={movie.image} />
        ))}
      </div>
    </div>
  );
}

export default Row;