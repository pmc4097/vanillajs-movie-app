import { createRouter } from "../core/heropy.js";
import Home from "./Home";
import Movie from "./Movie";
import Aboute from "./About";
import NotFound from "./NotFound";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/movie", component: Movie },
  { path: "#/about", component: Aboute },
  { path: ".*", component: NotFound },
]);
