const menuItems = [
  {
    name: 'Blackpepper Bacon',
    price: '7 CP',
    description: 'A pound of fresh, thick-cut bacon roasted and lightly brushed with our homemade mix of brown sugar, black pepper, garlic, and orange juice. A perfect appetizer for the most daring of adventurers!',
    image: '../src/blackpepper bacon.png',
  },
  {
    name: 'Adventurer\'s Rations',
    price: '9 CP',
    description: 'Packed full of protein and essential nutrients, our rations include an assortment of nuts, fresh cheeses, fruit, and dried meats alongside our homemade rye bread.',
    image: '../src/adventurer\'s rations.png',
  },
  {
    name: 'Traveller\'s Stew',
    price: '1 SP',
    description: 'This hearty stew is slow-cooked over an open flame, chock-full of potatoes, carrots, yellow onions, and a pound of beer-braised beef. A Guild favorite!',
    image: '../src/traveller\'s stew.png',
  },
  {
    name: 'Honey Glazed Ribs',
    price: '2 SP',
    description: 'Your choice of beef or pork ribs slathered with our signature honey glaze, delicately roasted to ensure an even char throughout. Fall-off-the-bone deliciousness!',
    image: '../src/honey glazed ribs.png',
  },
  {
    name: 'Seafood Bouillabaisse',
    price: '2 SP',
    description: 'Fresh-caught haddock, mussels, and clams slowly simmered in a flavorful broth of fish and tomato stock, leeks, chopped garlic, red pepper flakes, and saffron. You\'ll wish you had a ladle for this one.',
    image: '../src/seafood bouillabaisse.png',
  },
  {
    name: 'Apple Blackberry Pie',
    price: '8 CP',
    description: 'A flaky pie crust filled with a delicious mixture of crisp apples, plump blackberries, and a dash of ground cinnamon. Served with a delicious whipped sweet cream.',
    image: '../src/apple blackberry pie.png',
  },
]

function loadMenu() {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-container');

  
  menuItems.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-container');

    const image = document.createElement('img');
    image.classList.add('item-img');
    image.src = item.image;

    itemDiv.appendChild(image);

    const itemText = document.createElement('div');
    itemText.classList.add('item-text');

    const itemNameDiv = document.createElement('div');
    itemNameDiv.classList.add('item-name');

    const itemName = document.createElement('h3'); 
    itemName.textContent = item.name;

    const itemPrice = document.createElement('h3');
    itemPrice.textContent = item.price;

    itemNameDiv.appendChild(itemName);
    itemNameDiv.appendChild(itemPrice);

    itemText.appendChild(itemNameDiv);
    itemDiv.appendChild(itemText);

    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;

    itemText.appendChild(itemDescription);

    menuDiv.appendChild(itemDiv);
  })
  
  return menuDiv;
}

export { loadMenu };