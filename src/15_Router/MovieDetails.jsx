import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  // hook useParams return về một object có các properties là các params trên url
  // path: "/movies/:movieId" => { movieId: "1" }
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const fetchMovie = async () => {
    try {
      const { data } = await axios.get(
        `https://629757b414e756fe3b2dc8f0.mockapi.io/api/movies/${movieId}`
      );
      setMovie(data);
    } catch (error) {
      // call API fail => movieId không hợp lệ => navigate về trang NotFound
      navigate("/404");
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  if (!movie) return null;

  return (
    <div>
      <h1>Tên Phim: {movie.name}</h1>
      <p>Mô tả: {movie.description}</p>
      <img src={movie.image} alt={movie.name} />
    </div>
  );
};

export default MovieDetails;
