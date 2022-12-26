import { home } from "./home";
import { menu } from "./menu";

let homeClicked = true;
let contactClicked = false;
let menuClicked = false;
    

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
      if (navA.id == "Home" && homeClicked == false) {
        home();
        homeClicked = true;
        menuClicked = false;
        contactClicked = false;
      }  
      if (navA.id == "Menu" && menuClicked == false) {
        console.log("menu  Clikced");
        menuClicked = true;
        
        menu();
        homeClicked = false;
        
      }
       if (navA.id == "Contact" && contactClicked == false) {
        console.log("contact Clikced");
        contactClicked = true;
      }
    }), {once: true};
  }
}

export { navBar };
