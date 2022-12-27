import { navBar } from "./navbar";

export function contact() {
  content.innerHTML = "";
  navBar();

  content.innerHTML = ""
  navBar();


  const main = document.createElement("div");
  main.setAttribute("class", "mainsection")
  content.appendChild(main);

  
  const homeSection = document.createElement("div");
  homeSection.setAttribute("class", "homesection-contact")
  main.appendChild(homeSection)

  const restaurantHeader = document.createElement("div")
  restaurantHeader.setAttribute("class", "restaurantheader-top")
  restaurantHeader.textContent = "Ashes"
  homeSection.appendChild(restaurantHeader)

  const contactHeader = document.createElement("div")
  contactHeader.setAttribute("class", "contactheader")
  contactHeader.textContent = "Phone Number"
  homeSection.appendChild(contactHeader)

  const contactNumber = document.createElement("div")
  contactNumber.setAttribute("class", "contactheader")
  contactNumber.textContent = "#888-888-8888"
  homeSection.appendChild(contactNumber)


  const addressHeader = document.createElement("div")
  addressHeader.setAttribute("class", "addressheader")
  addressHeader.textContent = "Address"
  homeSection.appendChild(addressHeader)

  const addressNumber = document.createElement("div")
  addressNumber.setAttribute("class", "address")
  addressNumber.textContent = "8960 Bridle Street Bishop, GA 30621"
  homeSection.appendChild(addressNumber)





}
