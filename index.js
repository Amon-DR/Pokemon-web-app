pokemon_selection = document.querySelectorAll(".api-pokemon");
let pokemon_details = document.querySelector(".pokemon_details_trans");
let pokemon_selection_array = [pokemon_selection];

let Pokemon_names;
let Pokemon_pic;
let abilities;
let new_url;
let base_url;
// Calls the pokeapi and ask for random pokemons from 0 to 892
const fetch_url = async () => {
  Math.floor(Math.random() * 152);
  let base_url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(
    Math.random() * 892
  )}`;
  const response = await fetch(base_url);
  const data = await response.json();
  console.log(data);
  new_url = data;
};
// Gets the detail of the pokemon
const fetch_details = async () => {
  await fetch_url(base_url);
  Pokemon_names = new_url.name;
  Pokemon_pic = new_url.sprites.other["official-artwork"].front_default;
};

// display pokemon to the Dom
const add_ele = async () => {
  for (let index = 0; index <= pokemon_selection_array[0].length; index++) {
    await fetch_details();
    //
    pokemon_selection_array[0][index].textContent = "";
    //
    let make = pokemon_selection_array[0][index];
    let name_element = document.createElement("h1");
    let img_element = document.createElement("img");
    let img_element_src = document.createAttribute("src");
    let name_element_value = document.createTextNode(Pokemon_names);
    name_element.appendChild(name_element_value);
    make.appendChild(img_element).src = Pokemon_pic;
    make.appendChild(name_element);
  }
};

add_ele();

// pause animation & show info about when clicked
pokemon_selection.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element);
    pokemon_details.classList.toggle("pokemon_details_trans_js");
    pokemon_selection.forEach((element) => {
      element.classList.toggle("pause");
    });
  });
});
