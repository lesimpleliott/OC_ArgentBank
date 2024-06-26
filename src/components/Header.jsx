import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { color } from "../assets/styles/color";
import { logout } from "../feature/user.slice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <HeaderStyled>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="./argentBankLogo.webp"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        <div className="logWrapper">
          {!user.isConnected ? (
            <NavLink to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign in
            </NavLink>
          ) : (
            <>
              <NavLink to="/profile" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                {user.userName}
              </NavLink>
              <NavLink
                to="/login"
                className="main-nav-item"
                onClick={() => dispatch(logout())}
              >
                <i className="fa fa-sign-out"></i>
                Sign Out
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  .main-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    a {
      font-weight: bold;
      color: ${color.text};
    }
    a.router-link-exact-active {
      color: ${color.main};
    }
  }

  .logWrapper {
    display: flex;
    gap: 10px;
  }

  .fa-user-circle,
  .fa-sign-out {
    margin-right: 5px;
  }

  .main-nav-item {
    text-decoration: none;
    margin-right: 0.5rem;
  }

  .main-nav-item:hover {
    text-decoration: underline;
  }

  .main-nav-logo {
    display: flex;
    align-items: center;
  }

  .main-nav-logo-image {
    max-width: 100%;
    width: 200px;
  }
`;

export default Header;
