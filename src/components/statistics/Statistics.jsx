import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <p className={styles.description}>Good: {good}</p>
      <p className={styles.description}>Neutral: {neutral}</p>
      <p className={styles.description}>Bad: {bad}</p>
      <p className={styles.description}>Total: {total}</p>
      <p className={styles.description}>
        Positive feedback: {positiveFeedback}%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
