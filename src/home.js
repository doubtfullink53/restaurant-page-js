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
    restaurantHeader.textContent = "Ash"
    homeSection.appendChild(restaurantHeader)



    const myIcon = new Image();
    myIcon.setAttribute("class", "rest-img")
    myIcon.src = restaurantimg;
  
    homeSection.appendChild(myIcon);
  

    // const restaurantimg = document.createElement("img")
    // restaurantimg.src = restaurantimg
    // restaurantimg.setAttribute("height", "200px")


    // homeSection.appendChild(restaurantimg)


    // homeSection.textContent = "loremdflkasjdflsdajfl;ksdjaf;ldskajf;lsdajkfkl;"

}