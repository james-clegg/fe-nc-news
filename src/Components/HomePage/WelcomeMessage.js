import React from "react";
import styles from './HomePage.module.css'

const WelcomeMessage = props => {
  return (
    <p className={styles.header}>Welcome to Northcoders News, {props.user}!</p>
  );
};

export default WelcomeMessage;
