import styled from "styled-components";
import { color } from "../styles/color";

const Login = () => {
    return (
        <LoginStyle>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </LoginStyle>
    );
};

const LoginStyle = styled.main`
    background: ${color.background};

    .sign-in-button {
        display: block;
        width: 100%;
        padding: 8px;
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 1rem;
        border-color: #00bc77;
        background-color: #00bc77;
        color: #fff;
    }

    .sign-in-content {
        box-sizing: border-box;
        background-color: white;
        width: 300px;
        margin: 0 auto;
        margin-top: 3rem;
        padding: 2rem;
    }

    .sign-in-icon {
        font-size: 5rem;
    }

    .input-remember {
        display: flex;

        label {
            margin-left: 0.25rem;
        }
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-bottom: 1rem;

        label {
            font-weight: bold;
        }

        input {
            padding: 5px;
            font-size: 1.2rem;
        }
    }
`;

export default Login;
