import styled from "styled-components";
import { color } from "../styles/color";
import Account from "../components/Account";

const Profil = () => {
    return (
        <ProfilStyle>
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    Tony Jarvis!
                </h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account />


        </ProfilStyle>
    );
};

// Styled components
const ProfilStyle = styled.main`
    background: ${color.background};

    .header {
        color: #fff;
        margin-bottom: 2rem;
    }

    .edit-button {
        border-color: #00bc77;
        background-color: #00bc77;
        color: #fff;
        font-weight: bold;
        padding: 10px;
    }
`;

export default Profil;
