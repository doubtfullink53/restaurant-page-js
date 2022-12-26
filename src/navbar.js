import { home } from "./home";

function navBar() {
  const navBar = document.createElement("nav");
  navBar.setAttribute("class", "navbar");

  content.appendChild(navBar);

  const navLinks = document.createElement("ul");
  navLinks.setAttribute("class", "nav-links");
  navBar.appendChild(navLinks);

  const navText = ["Home", "Menu", "Contact"];

  for (var i = 0; i < navText.length; i += 1) {
    const navItems = document.createElement("li");
    navItems.setAttribute("class", "nav-item");
    navLinks.appendChild(navItems);

    const navA = document.createElement("a");
    // navA.setAttribute("onclick", "uClicked()")
    navA.id = `${navText[i]}`;
    navA.innerHTML = navText[i];
    navItems.appendChild(navA);

    navA.addEventListener("click", function handleClick(event) {
      // console.log(navA.id);
      if (navA.id == "Home") {
        // console.log("home Clikced");
        home();
      } else if (navA.id == "Menu") {
        console.log("menu  Clikced");
      } else if (navA.id == "Contact") {
        console.log("contact Clikced");
      }
    });
  }
}

export { navBar };
