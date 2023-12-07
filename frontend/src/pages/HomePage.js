import { useState, useEffect } from "react";
import '../styles/components/pages/HomePage.css'
import { pokemones } from '../components/data.js'

const HomePage = (props) => {

    const [pokemonRival, setPokemonRival] = useState(pokemones[0]);
    const [pokemonUser, setPokemonUser] = useState(pokemones[2]);

    const cambiarRival = () => {
        const index = Math.floor(Math.random() * pokemones.length);
        setPokemonRival(pokemones[index]);
    };

    const generadorUsuario = () => {
        const indexUser = Math.floor(Math.random() * pokemones.length);
        const newSrc = pokemones[indexUser];
        setPokemonUser(newSrc);
      };
    
      useEffect(() => {
        cambiarRival();
    }, [generadorUsuario]);

    return (
        <div className="game-main">
            <h1>¡Te damos la bienvenida a PokeGame!</h1>
            <p>Para inciar el juego, tenés que hacer click en la pokebola.</p>
            <div class="container">

                <div class="user-screen">
                    <p>Tu pokémon</p>
                    <img src={pokemonUser} alt="Pokemon" className="img-pokemon" id="img-usuario"></img>
                    <button onClick={generadorUsuario}><img src="img/pokebola.png" alt="pokebola" className="img-pokebola"></img></button>

                </div>

                <div class="home-screen">
                    <p>Rival</p>
                    <img src={pokemonRival} alt="Pokemon" className="img-pokemon" id="img-rival"></img>

                </div>
            </div>
        </div>
    )
}

export default HomePage;