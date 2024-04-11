import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { color } from "../assets/styles/color";

const Header = () => {
    return (
        <HeaderStyled>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src="./argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
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

    .fa-user-circle {
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
