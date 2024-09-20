import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MovieList from "./home/MovieList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieList />
  </StrictMode>
);
