import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../assets/styles/color";
import Account from "../components/Account";

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {!user || !user.isConnected ? (
        <Navigate to="/" />
      ) : (
        <ProfileStyle>
          <div className="header">
            <h1>
              Welcome back
              <br />
              {user.firstName} {user.lastName}
            </h1>
            <button className="edit-button">Edit Name</button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <Account />
        </ProfileStyle>
      )}
    </>
  );
};

// Styled components
const ProfileStyle = styled.main`
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

export default Profile;
