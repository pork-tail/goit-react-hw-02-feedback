import React from "react";
import styles from "./FeedbackOptions.module.css";
const FeedbackOptions = ({
  good,
  neutral,
  bad,
  addGoodFeedback,
  addBadFeedback,
  addNeutralFeedBack,
}) => {
  return (
    <div className={styles.optionsContainer}>
      <button
        className={styles.btn}
        type="button"
        onClick={() => addGoodFeedback(good)}
      >
        Good
      </button>
      <button
        className={styles.btn}
        type="button"
        onClick={() => addNeutralFeedBack(neutral)}
      >
        Neutral
      </button>
      <button
        className={styles.btn}
        type="button"
        onClick={() => addBadFeedback(bad)}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
