import { Store } from "../core/heropy";

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: "https://heropy.blog/css/images/logo.png",
  name: "Charles / Charles Park",
  email: "mcpark4097@gmail.com",
  blog: "https://heropy.blog/",
  github: "https://github.com/pmc4097",
  repository: "https://github.com/pmc4097/vanillajs-movie-app",
});
