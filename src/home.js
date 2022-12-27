import restaurantimg from './Bordeaux-076.png'
import { navBar } from './navbar';

export function home(){
    content.innerHTML = "";
    navBar()
    const main = document.createElement("div");
    main.setAttribute("class", "mainsection")
    content.appendChild(main);

    
    const homeSection = document.createElement("div");
    homeSection.setAttribute("class", "homesection")
    main.appendChild(homeSection)




    const restaurantHeader = document.createElement("div")
    restaurantHeader.setAttribute("class", "restaurantheader")
    restaurantHeader.innerHTML = "<h1> Ashes </h1>"
    homeSection.appendChild(restaurantHeader)

    const aboutRestaurant = document.createElement("div")
    aboutRestaurant.setAttribute("class", "aboutrestaurant")
    aboutRestaurant.textContent = "Lorem ipsum dolor sit amet."
    restaurantHeader.appendChild(aboutRestaurant)

    

}