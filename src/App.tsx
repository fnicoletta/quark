import React from "react";
// import styles from "./App.module.scss";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <section>
        Illustrations by{" "}
        <a href="https://icons8.com/illustrations/author/6023f2cd123f99000e63cdd1">
          Anna Antipina
        </a>{" "}
        from <a href="https://icons8.com/illustrations">Ouch!</a>
      </section>
    </div>
  );
};

export default App;
