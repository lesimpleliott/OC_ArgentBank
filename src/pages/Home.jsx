import styled from "styled-components";
import Feature from "../components/Feature";
import dataFeatures from "../datas/dataHomeFeatures";

const Home = () => {
  return (
    <main>
      <HeroStyled>
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </HeroStyled>

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
const HeroStyled = styled.div`
  height: 300px;
  position: relative;
  background-image: url("./bank-tree.webp");
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;

  .hero-content {
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;

    .subtitle {
      font-weight: bold;
      font-size: 1rem;
      margin: 0;
    }

    .text {
      margin-bottom: 0;
      font-size: 0.9rem;
    }
  }

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;

    .hero-content {
      position: absolute;
      top: 50px;
      right: 50px;
      width: 300px;
      margin: 2rem;
    }

    .hero-content .subtitle {
      font-size: 1.5rem;
    }

    .hero-content .text {
      font-size: 1.2rem;
    }
  }
`;

const FeaturesStyled = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

export default Home;
