import React from "react";
// import "./style.css"
// import styles from "./style.module.css";
import styles from "./style.module.scss";

const DemoStyle = () => {
  return (
    <div>
      {/* css */}
      {/* <h1 className="title">Cybersoft</h1> */}

      {/* css module */}
      {/* <h1 className={styles.title}>Cybersoft</h1>
      <h1 className={styles.titlePrimary}>BC22</h1> */}

      {/* scss module */}
      <div className={styles.box}>
        <h1>Hello Cybersoft</h1>
      </div>
    </div>
  );
};

export default DemoStyle;
