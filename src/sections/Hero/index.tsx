import React from "react";
import EmailSubmit from "../../components/EmailSubmit";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroText}>
        <h1>The Building Block for Everything</h1>
        <p>
          Gather data. Streamline it. Profit. All through the power of Quark's
          powerful machine learning algorithm.
        </p>
      </div>
      <EmailSubmit />
      <img className={styles.heroImg} src="/static/robo-hero.png" alt="robot" />
    </section>
  );
};

export default Hero;

// <p>
//           How do you get 100% of the profit with 0% of the work? Quark's
//           bleeding-edge API takes your data and streamlines it, creating
//           "secret-sauce" features that will push you to the top of the market.
//         </p>
