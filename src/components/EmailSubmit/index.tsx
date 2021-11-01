import React from "react";
import styles from "./EmailSubmit.module.scss";

const EmailSubmit: React.FC = () => {
  const submitEmail = (e: React.FormEvent) => {
    e.preventDefault(); //stops the page from refreshing
  };
  return (
    <form className={styles.emailSubmit} onSubmit={submitEmail}>
      <input
        className={styles.input}
        type="email"
        placeholder="Enter your email"
      />
      <button className={styles.btn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default EmailSubmit;
