import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { color } from "../assets/styles/color";

const Error = () => {
  const naviguate = useNavigate();
  return (
    <ErrorStyled>
      <img src="./404Error.svg" alt="404 error" />
      <button onClick={() => naviguate("/")}>Go back Home</button>
    </ErrorStyled>
  );
};

const ErrorStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: ${color.background};

  img {
    width: 100%;
    height: 50vw;
    max-height: 60vh;
  }

  button {
    width: 200px;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
  }
`;

export default Error;
