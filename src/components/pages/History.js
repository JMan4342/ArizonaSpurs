import React from "react";
import styles from "../../styleSheets/styleHistory.module.css";

function History(props) {
  return (
    <div className="history">
      <div>
        <h2 className="m-3">History</h2>
      </div>
      <div className={styles.timeline}>
        <div className={`${styles.container} ${styles.left}`}>
          <div className={styles.content}>
            <h2>August 16, 2014</h2>
            <p>First watch party as the Arizona Spurs</p>
          </div>
        </div>
        <div className={`${styles.container} ${styles.left}`}>
          <div className={styles.content}>
            <h2>August 13, 2016</h2>
            <p>First watch party at our current home, Fibber Magees</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
