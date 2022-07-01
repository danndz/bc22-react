import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  // hook useNavigate return về một function dùng để điều hướng url
  const navigate = useNavigate();
  const goToDetails = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  // hook useSearchParams return về 1 array gồm 2 phần tử
  // - searchParams: một đối tượng URLSearchParams
  // - setSearchParams: dùng để thay đổi giá trị search params trên url
  const [searchParams, setSearchParams] = useSearchParams();
  const changePage = (page) => {
    setSearchParams({ page });
  };

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://629757b414e756fe3b2dc8f0.mockapi.io/api/movies",
        {
          params: {
            page: searchParams.get("page") || 1,
            limit: 4,
          },
        }
      );
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [searchParams]);

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="col-sm-3">
              <div className="card">
                <img src={movie.image} alt={movie.name} />
                <div className="card-body">
                  <h3 className="card-title">{movie.name}</h3>
                  <p className="card-text">{movie.description}</p>

                  {/* Cách 1: Dùng thẻ Link để điều hướng */}
                  {/* <Link className="btn btn-success" to={`/movies/${movie.id}`}>
                    Chi Tiết
                  </Link> */}

                  {/* Cách 2: Gọi hàm */}
                  <button
                    className="btn btn-success"
                    onClick={() => goToDetails(movie.id)}
                  >
                    Chi Tiết
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Phân trang */}
      <button className="btn btn-primary" onClick={() => changePage(1)}>
        1
      </button>
      <button className="btn btn-primary" onClick={() => changePage(2)}>
        2
      </button>
      <button className="btn btn-primary" onClick={() => changePage(3)}>
        3
      </button>
    </div>
  );
};

export default MovieList;
