import styled from "styled-components";
import Feature from "../components/Feature";
import HeroBanner from "../components/HeroBanner";
import dataFeatures from "../datas/dataHomeFeatures";

const Home = () => {
  return (
    <main>
      <HeroBanner />

      <FeaturesStyled>
        <h2 className="sr-only">Features</h2>
        {dataFeatures.map((item, index) => (
          <Feature key={index} item={item} />
        ))}
      </FeaturesStyled>
    </main>
  );
};

// STYLED-COMPONENTS
const FeaturesStyled = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

export default Home;
