const ContactoPage = (props) => {

    return (
        <main className="holder contacto">
            <div>
                <h2>Contactame</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar"/></p>
                </form>
            </div>
            <div class="datos">
                <ul>
                    <li><a href="mailto:guadalupe.otero.c@gmail.com">guadalupe.otero.c@gmail.com</a></li>
                    <li><a href="https://www.linkedin.com/in/g-otero/">Linkedin</a></li>
                </ul>
            </div>
        </main>
    );
};
export default ContactoPage;