
import './style.css';
import { navBar} from "./navbar";
import { home } from "./home";





(function createContentDiv() {
    const content = document.createElement("div")
    content.id = "content"

    document.body.appendChild(content)
   
    
  


})();



navBar()

home();

