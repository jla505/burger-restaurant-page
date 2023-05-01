function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
  
    const burgerImage = document.createElement("img");
    burgerImage.src = "images/stockburger.png";
    burgerImage.alt = "Burger";
  
    home.appendChild(createParagraph("Best burgers in Vancouver"));
    home.appendChild(createParagraph("Made with passion since 1998"));
    home.appendChild(burgerImage);
    home.appendChild(createParagraph("Order online or visit us!"));
  
    return home;
  }
  
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }
  
  export default loadHome;