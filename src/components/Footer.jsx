import styled from "styled-components";
import { color } from "../assets/styles/color";

const Footer = () => {
    return (
        <FooterStyled>
            <p className="footer-text">Copyright 2020 Argent Bank</p>
        </FooterStyled>
    );
};

const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    border-top: 2px solid ${color.border};
    padding: 2rem 0 1.5rem;

    .footer-text {
        margin: 0;
        padding: 0;
    }
`;

export default Footer;
