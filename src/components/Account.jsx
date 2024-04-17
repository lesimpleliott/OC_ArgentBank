import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../assets/styles/color";

const Account = ({ item }) => {
  return (
    <AccountStyle>
      <div className="account-content-wrapper">
        <h3 className="account-title">
          Argent Bank {item.accountType} ({item.accountNumber})
        </h3>
        <p className="account-amount">{item.balance}</p>
        <p className="account-amount-description">{item.balanceDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </AccountStyle>
  );
};

Account.propTypes = {
  item: PropTypes.shape({
    accountType: PropTypes.string.isRequired,
    accountNumber: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
    balanceDescription: PropTypes.string.isRequired,
  }).isRequired,
};

const AccountStyle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  .account-content-wrapper {
    width: 100%;
    flex: 1;
  }

  .account-title {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
  }

  .account-amount {
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .account-amount-description {
    margin: 0;
  }

  .transaction-button {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: ${color.second};
    background-color: ${color.second};
    color: #fff;
  }

  @media (min-width: 720px) {
    flex-direction: row;

    .account-content-wrapper.cta {
      flex: 0;
    }

    .transaction-button {
      width: 200px;
    }
  }
`;

export default Account;
