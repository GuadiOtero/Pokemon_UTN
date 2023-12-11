import { useState, useEffect } from "react";
import '../styles/components/pages/HomePage.css'
import { pokemones } from '../components/data.js'


const HomePage = (props) => {

    /* Generamos el pokemon para el juego */
    const [pokemonRival, setPokemonRival] = useState(pokemones[0]);
    const [pokemonUser, setPokemonUser] = useState(pokemones[0]);

    const [activeCard, setActiveCard] = useState(true);
    const [disableButton, setDisableButton] = useState(false);

    const flipCard = () => {
        setActiveCard(!activeCard);
        setDisableButton(!disableButton);
    }

    /* Generador de pokemon para el rival */
    const cambiarRival = () => {
        const index = Math.floor(Math.random() * pokemones.length);
        const newRival = pokemones[index];
        setPokemonRival(newRival);
    };

    /* Generador de pokemon para el usuario */
    const generadorUsuario = () => {
        const indexUser = Math.floor(Math.random() * pokemones.length);
        const newSrc = pokemones[indexUser];
        setPokemonUser(newSrc);
    };

    /* Al mismo tiempo que el usuario cambia de pokemon, cambia el rival. */
    useEffect(() => {
        cambiarRival();
    }, [generadorUsuario]);

    return (
        <div className="game-main">
            <h1>¡Te damos la bienvenida a PokeGame!</h1>
            <p>Primero tenés que elegir tu pokémon, haciendo click en la pokebola lo podés cambiar.</p>
            <p>Una vez elegido, hace click en INICIAR.</p>

            <div className="container">
                {/* Carta Usuario */}
                <div className="user-screen">
                    <p>Tu pokémon</p>
                    <div className="user-card">
                        <img src={pokemonUser} alt="Pokemon" className="img-pokemon" id="img-usuario"></img>
                        <button onClick={generadorUsuario} disabled={disableButton}><img src="img/pokebola.png" alt="pokebola" className="img-pokebola"></img></button>
                    </div>
                </div>
                {/* Contenedor de resultados */}
                <div className="results-screen">
                    <button className="iniciar-button" onClick={flipCard} disabled={disableButton}>INICIAR</button>
                    <button className="reiniciar-button" onClick={flipCard} disabled={!disableButton}>REINICIAR</button>
                    <div className="results">
                        <h2>Resultados</h2>


                    </div>
                </div>
                {/* Carta Rival */}
                <div className="home-screen">
                    <p>Pokémon rival</p>
                    <div className="rival-card" id={activeCard ? "cardFlip" : " "}>
                        <div className="front-rival"><img src={pokemonRival} alt="Pokemon" className="img-pokemon" id="img-rival"></img></div>
                        <div className="back-rival"><img src="img/back_card.png" className="img-pokemon"></img></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage;