import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../assets/styles/color";
import Account from "../components/Account";
import { editUsername } from "../feature/user.slice";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState(false);
  const [username, setUsername] = useState(user.userName);

  const handleSubmit = async () => {
    // modifier le state
    dispatch(editUsername(username));

    // modifier la data sur le serveur
    await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        userName: username,
      }),
    });
  };

  return (
    <>
      {!user || !user.isConnected ? (
        <Navigate to="/" />
      ) : (
        <ProfileStyle>
          <div className="header">
            {!editUser ? (
              <>
                <h1>
                  Welcome back
                  <br />
                  {user.firstName} {user.lastName}
                </h1>
                <button
                  className="edit-button"
                  onClick={() => {
                    setEditUser(true);
                    setUsername(user.userName);
                  }}
                >
                  Edit Name
                </button>
              </>
            ) : (
              <>
                <h1>Edit Username</h1>
                <section className="inputContainer">
                  <div className="username">
                    <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div className="firstname">
                    <label htmlFor="firstname">Firstname</label>
                    <input
                      id="firstname"
                      type="text"
                      value={user.firstName}
                      disabled
                    />
                  </div>
                  <div className="lastname">
                    <label htmlFor="lastname">Lastname</label>
                    <input
                      id="lastname"
                      type="text"
                      value={user.lastName}
                      disabled
                    />
                  </div>
                </section>
                <section className="buttonsContainer">
                  <button
                    className="edit-button"
                    onClick={() => {
                      setEditUser(false);
                      handleSubmit();
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="edit-button cancel"
                    onClick={() => setEditUser(false)}
                  >
                    Cancel
                  </button>
                </section>
              </>
            )}
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

    .inputContainer {
      display: flex;
      flex-direction: column;
      gap: 0.75em;
      margin-bottom: 1.5em;

      input {
        height: 25px;
        width: 150px;
        margin-left: 10px;
        padding-inline: 5px;
      }

      input:disabled {
        font-style: italic;
      }
    }

    .buttonsContainer {
      display: flex;
      justify-content: center;
      gap: 10px;
    }

    .edit-button {
      min-width: 70px;
      padding: 10px;
      border-color: ${color.second};
      background-color: ${color.second};
      color: #fff;
      font-weight: bold;
    }
  }
`;

export default Profile;
