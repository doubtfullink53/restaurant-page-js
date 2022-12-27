import { navBar } from './navbar'
import restaurantimg from './menu.png'

export function menu(){
   content.innerHTML = ""
    navBar();


    const main = document.createElement("div");
    main.setAttribute("class", "mainsection")
    content.appendChild(main);

    
    const homeSection = document.createElement("div");
    homeSection.setAttribute("class", "homesection")
    main.appendChild(homeSection)




    const restaurantHeader = document.createElement("div")
    restaurantHeader.setAttribute("class", "restaurantheader")
    restaurantHeader.textContent = "Ashes"
    homeSection.appendChild(restaurantHeader)



    const myIcon = new Image();
    myIcon.setAttribute("class", "menu-img")
    myIcon.src = restaurantimg;
  
    homeSection.appendChild(myIcon);

}