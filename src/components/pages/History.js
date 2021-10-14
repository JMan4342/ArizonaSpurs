import React from "react";
import styles from "../../styleSheets/styleHistory.module.css";

var id = null;
function myMoveLeft() {
  var elem = document.getElementById("timeDotLeft");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos === -200) {
      clearInterval(id);
    } else {
      pos--; 
      // elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

function myMoveRight() {
  var elem = document.getElementById("timeDotRight");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos === 200) {
      clearInterval(id);
    } else {
      pos++; 
      // elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}


function History(props) {
  return (
    <div className="history">
      <div>
        <h2 className="m-3">History</h2>
      </div>
      <div className={styles.timeline}>
        <div className={styles.left} >
          <div className={styles.container} id="timeDotLeft" onClick={myMoveLeft}></div>
          <div className={styles.content}>
            <h2>August 16, 2014</h2>
            <p>First watch party as the Arizona Spurs</p>
          </div>
        </div>
        <div className={styles.timeline}>
        <div className={styles.right}>
          <div className={styles.container} id="timeDotRight" onClick={myMoveRight}></div>
          <div className={styles.content}>
            <h2>August 13, 2016</h2>
            <p>First watch party at our current home, Fibber Magees</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default History;
