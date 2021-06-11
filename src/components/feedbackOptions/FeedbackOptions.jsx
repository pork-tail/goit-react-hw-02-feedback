import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";
const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={styles.optionsContainer}>
      <button
        className={styles.btn}
        type="button"
        onClick={() => onLeaveFeedback("good")}
      >
        Good
      </button>
      <button
        className={styles.btn}
        type="button"
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={styles.btn}
        type="button"
        onClick={() => onLeaveFeedback("bad")}
      >
        Bad
      </button>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
