import { Link } from "react-router-dom";
import "./Signup.css"

function Signup() {
    return (
        <section>
        <form>
            <div className="title">
                <h1>@elotitos.com</h1>
            </div>
            <hr />
            <div className="grid-container">
                <div className="first-column">
                    <div className="input-container">
                        <span>Nombres</span>
                        <input type="text" name="nombres" />
                    </div>
                    <div className="input-container">
                        <span>Apellidos</span>
                        <input type="text" name="apellidos" />
                    </div>
                    <div className="input-container">
                        <span>Username</span>
                        <input type="text" name="username" />
                    </div>
                </div>
                <div className="second-column">
                    <div className="input-container">
                        <span>Email</span>
                        <input type="email" name="email" />
                    </div>
                    <div className="input-container">
                        <span>Contraseña</span>
                        <input type="password" name="password" />
                    </div>
                    <div className="input-container">
                        <span>Repita la contraseña</span>
                        <input type="password" name="password2" />
                    </div>
                </div>
            </div>
            <div className="button-submit">
                <button type="submit" className="btn"><span>Enviar</span></button>
            </div>
            <div className="login">
                <span>Ya tienes una cuenta?</span> <Link to={`/`}>Loggeate!</Link>
            </div>
        </form>

    </section>
    );
}

export default Signup;