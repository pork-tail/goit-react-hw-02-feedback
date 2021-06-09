import React from "react";
import styles from "./SectionStyles.module.css";
const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={styles.title} title={title}>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
