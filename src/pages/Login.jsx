import "./Login.css"

function Login(){
    return (
        <section>
            <form>
                <div className="title">
                    <h1>@elotitos.com</h1>
                </div>
                <hr />
                <div className="input-login">
                    <input type="email" name="email" placeholder="Introduce tu email..." />
                    <input type="password" name="password" id="" placeholder="Introduce tu contraseña..." />
                </div>
                <div className="button-submit">
                    <button type="submit" className="btn"><span>Enviar</span></button>
                </div>
                <div className="register">
                    <span>No tienes cuenta...</span> <a href="/signup">Crea tu cuenta!</a>
                </div>
            </form>
        </section>
    );
}

export default Login;