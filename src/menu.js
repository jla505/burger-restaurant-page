function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Beef Burger",
      "Beef patty, Lettuce, Onion, Tomato, Pickle, Cheese, Mayo, Ketchup"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Cheddar Burger",
      "Beef patty, Cheddar, Tomato, Lettuce"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Chicken Burger",
      "Chicken, Tomato, Lettuce, Mayo"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Deluxe Burger",
      "Beef patty, Cheese, Lettuce"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Egg Burger",
      "Beef patty, Egg, Tomato, Lettuce"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Fish Burger",
      "Fish patty, Cheese, Mayo"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/burgers/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;

  
  