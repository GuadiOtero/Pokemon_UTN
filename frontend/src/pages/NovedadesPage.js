import '../styles/components/pages/NovedadesPage.css'

const NovedadesPage = (props) => {
    return (
      <div className="novedades-main">
        <h2>Novedades</h2>
        <div className="novedad-container">
          <img src="img/charmander.png" alt="imagen pokemon" />
          <div className="text-container">
            <h3>Charmander: El Pokémon Llamita</h3>
            <h4>Dato Curioso</h4>
            <p>Charmander, conocido como el Pokémon Llamita, es un Pokémon tipo
            fuego. Su llama en la cola arde más intensamente cuando está
            emocionado. ¡Asegúrate de cuidar bien a tu Charmander para que
            crezca fuerte y se convierta en un poderoso Charizard!</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default NovedadesPage;