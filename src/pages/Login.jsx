import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../assets/styles/color";
import { setToken, setUser } from "../feature/user.slice";

const Login = () => {
  const dispatch = useDispatch();
  const naviguate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberInput = document.getElementById("remember-me");

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      setEmail(localUser.email);
      setPassword(localUser.password);
      setRememberMe(localUser.rememberMe);
    }
  }, []);

  const fetchToken = async () => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: usernameInput.value,
        password: passwordInput.value,
      }),
    });
    const data = await response.json();
    return data.body.token;
  };
  const fetchUserDatas = async (token) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
    const data = await response.json();
    return data.body;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch et dispatch pour le token
    const token = await fetchToken();
    dispatch(setToken(token));
    // Fecth et dispatch de la data USER
    const userDatas = await fetchUserDatas(token);
    dispatch(setUser(userDatas));

    // Gestion session / Se souvenir de l'utilisateur
    if (rememberMe) {
      const localUser = {
        email: usernameInput.value,
        password: passwordInput.value,
        rememberMe: rememberInput.checked,
      };
      localStorage.setItem("user", JSON.stringify(localUser));
    } else {
      localStorage.removeItem("user");
    }

    // Redirection vers la page profil
    naviguate("/profile");
  };

  return (
    <LoginStyle>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setRememberMe(false);
                setPassword("");
              }}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setRememberMe(false);
              }}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
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
