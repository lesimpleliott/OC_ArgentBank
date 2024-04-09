import PropTypes from "prop-types";
import styled from "styled-components";

const Feature = ({ item }) => {
    return (
        <FeatureStyled>
            <img src={item.icon} alt={item.alt} className="feature-icon" />
            <h3 className="feature-item-title">{item.title}</h3>
            <p>{item.description}</p>
        </FeatureStyled>
    );
};

Feature.propTypes = {
    item: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

// STYLED-COMPONENTS
const FeatureStyled = styled.div`
        flex: 1;
        padding: 2.5rem;

    .feature-icon {
        width: 100px;
        border: 10px solid #00bc77;
        border-radius: 50%;
        padding: 1rem;
    }

    .feature-item-title {
        color: #222;
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
`;

export default Feature;
