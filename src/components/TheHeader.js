import { Component } from "../core/heropy";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          { name: "Search", href: "#/" },
          { name: "Movie", href: "#/movie?id=tt4520988" },
          { name: "About", href: "#/about" },
        ],
      },
    });
    window.addEventListener("popstate", () => this.render());
  }
  render() {
    const hash = location.hash.split("?")[0];
    this.el.innerHTML = /*html */ `
        <a href="#/" alt="로고" class="logo">
            <span>OMDbAPI</span>.COM
        </a>
        <nav>
            <ul>
                ${this.state.menus
                  .map((item) => {
                    const href = item.href.split("?")[0];
                    const isActive = hash === href;
                    return /*html */ `
                        <li>
                            <a href="${item.href}" class="${isActive ? "active" : ""}">
                                ${item.name}
                            </a>
                        </li>
                      `;
                  })
                  .join("")}
            </ul>    
        </nav>
        <a href="#/about" class="user">
            <img src="https://heropy.blog/css/images/logo.png" alt="logo">
        </a>
    `;
  }
}
