console.log(data);

/* You can start simple and just render a single 
pokemon card from the first element */

// Loop through data array of pokemon data
const cardListUl = document.getElementById("card-list");
for (let i = 0; i < data.length; i++) {
  console.log("Pokemon at i", data[i]);
  const pokemon = data[i];

  // add li to ul
  const cardLi = document.createElement("li");
  cardLi.setAttribute("class", "card");
  cardListUl.append(cardLi);

  // create an h2
  const cardH2 = document.createElement("h2");
  cardH2.setAttribute("class", "card--title");
  // set the text to pokemon name
  cardH2.innerHTML = pokemon.name;
  // add h2 to li
  cardLi.append(cardH2);

  // create an image
  const cardImg = document.createElement("img");
  cardImg.setAttribute("class", "card--img");
  cardImg.width = "256";
  cardImg.src = pokemon.sprites.other["official-artwork"].front_default;
  cardLi.append(cardImg);
}

console.log(data[0]);
