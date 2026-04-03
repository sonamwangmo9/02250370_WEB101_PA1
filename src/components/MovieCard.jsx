function MovieCard({ title, image }) {
  return (
    <div className="movie">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default MovieCard;