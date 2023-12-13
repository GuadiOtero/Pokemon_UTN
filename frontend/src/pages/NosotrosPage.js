import '../styles/components/pages/NosotrosPage.css'


const NosotrosPage = (props) => {
    return (
        <div className="nosotros-main">
            <h1>Nuestro equipo</h1>
            <div className="team-container">
                <div className="team-one t-cont">
                    <div className="team-card">
                        <img src="img/perfil01.jpg" className="img-team"></img>
                        <div className="team-info">
                            <h2>Guadalupe Otero</h2>
                            <p>Designer</p>
                        </div>
                    </div>
                </div>
                <div className="team-two t-cont">
                    <div className="team-card">
                        <img src="img/perfil02.jpg" className="img-team"></img>
                        <div className="team-info">
                            <h2>Guadalupe Otero</h2>
                            <p>Frontend Developer</p>
                        </div>
                    </div>

                </div>
                <div className="team-three t-cont">
                    <div className="team-card">
                        <img src="img/perfil03.jpg" className="img-team"></img>
                        <div className="team-info">
                            <h2>Guadalupe Otero</h2>
                            <p>Backend Developer</p>
                        </div>
                    </div>

                </div>
                <div className="team-about">
                    <div className="team-card-about">
                        <img src="img/perfil.jpeg" className="img-about"></img>
                        <div className="team-text">
                            <h1>Guadalupe Otero</h1>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NosotrosPage;