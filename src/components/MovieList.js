import { Component } from "../core/heropy";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => this.render());
    movieStore.subscribe("loading", () => this.loader());
    movieStore.subscribe("message", () => this.render());
  }
  render() {
    console.log("MovieList render...");
    this.el.classList.add("movie-list");
    this.el.innerHTML = /*html*/ `
      ${
        movieStore.state.message
          ? `<div class="message">${movieStore.state.message}</div>`
          : `<div class="movies"></div>`
      }
      <div class="the-loader hide"></div>
    `;

    const moviesEl = this.el.querySelector(".movies");
    moviesEl?.append(
      ...movieStore.state.movies.map((movie) => new MovieItem({ movie }).el),
      //배열데이터 이므로 전개연산자 ... 로 배열 제거
    );

    const loaderEl = this.el.querySelector(".the-loader");
    movieStore.state.loading
      ? loaderEl.classList.remove("hide")
      : loaderEl.classList.add("hide");
  }

  loader() {
    console.log("loading...");
    const loaderEl = this.el.querySelector(".the-loader");
    movieStore.state.loading
      ? loaderEl.classList.remove("hide")
      : loaderEl.classList.add("hide");
  }
}
