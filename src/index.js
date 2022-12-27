
import './style.css';
import { navBar} from "./navbar";
import { home } from "./home";
// import backgroundImg  from "./background.jpg"




(function createContentDiv() {
    const background = document.createElement("div");
    background.id = "background-img";
    document.body.appendChild(background)

    const content = document.createElement("div");
    content.id = "content";

    background.appendChild(content);
  
   
})();





navBar();

home();