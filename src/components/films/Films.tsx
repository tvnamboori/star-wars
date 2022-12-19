import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFilms } from "redux-data/films/actions";
import { RootState } from "redux-data/types";
import "./Films.scss";

type data = {
  title: string;
  director: string;
  episode_id: number;
  opening_crawl: string;
  producer: string;
};

export const Films: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { films } = useSelector((state: RootState) => state.reducer);

  useEffect(() => {
    if (films.length === 0) {
      dispatch(getFilms());
    }
  }, []);

  const Redirect = (value: data) => {
    navigate("/film-details", { state: value });
  };
  return (
    <>
      <h1>Welcome to Films</h1>

      <ul className="list">
        {films.map((value,index) => {
          return <li key={index} onClick={() => Redirect(value)}>{value.title}</li>;
        })}
      </ul>
    </>
  );
};
