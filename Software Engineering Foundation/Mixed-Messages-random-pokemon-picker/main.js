class Pokemon{
    constructor(name){
        this._name = name
    }

    get name(){
        return this._name
    }

    imgPath(){
        let imgPath = "pokemon/photo/" + this._name + ".jpg";
        return imgPath;
    }
}

let pokemonName = ['bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle','blastoise','pikachu','raichu']

const randomPokemon = () => {
    let randomIndex = Math.floor(Math.random() * pokemonName.length);
    const pokemon = new Pokemon(pokemonName[randomIndex]);

    let pokemonData = [pokemon.name,pokemon.imgPath()]

    return pokemonData;
}


let buttonElement = document.getElementById('pokemon-random-button');

buttonElement.addEventListener('click', () => {
    let pokemonData = randomPokemon();
    let pokemonName = pokemonData[0];
    let pokemonImgPath = pokemonData[1];

    let pokemonNameElement = document.getElementById('pokemon-name');
    pokemonNameElement.hidden = false;
    pokemonNameElement.innerHTML = pokemonName;

    let pokemonImgElement = document.getElementById('pokemon-image');
    pokemonImgElement.src = pokemonImgPath;
    
});