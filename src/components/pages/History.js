import React, { useState } from "react";
import styles from "../../styleSheets/styleHistory.module.css";

export default function History(props) {
  const [leftActive1, setLeftActive1] = useState(false);
  const [leftActive2, setLeftActive2] = useState(false);
  const [rightActive1, setRightActive1] = useState(false);
  const [rightActive2, setRightActive2] = useState(false);

  var id = null;
  function myMoveLeft() {
    leftActive1 ? setLeftActive1(false) : setLeftActive1(true);
    console.log(leftActive1);
    var elem = document.getElementById("timeDotLeft");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
      if (pos === -200) {
        clearInterval(id);
      } else {
        pos--;
        elem.style.left = pos + "px";
      }
    }
  }

  function myMoveLeft2() {
    leftActive2 ? setLeftActive2(false) : setLeftActive2(true);
    console.log(leftActive1);
    var elem = document.getElementById("timeDotLeft2");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
      if (pos === -200) {
        clearInterval(id);
      } else {
        pos--;
        elem.style.left = pos + "px";
      }
    }
  }

  function myMoveRight() {
    rightActive1 ? setRightActive1(false) : setRightActive1(true);
    var elem = document.getElementById("timeDotRight");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 3);
    function frame() {
      if (pos === 200) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.left = pos + "px";
      }
    }
  }

  function myMoveRight2() {
    rightActive2 ? setRightActive2(false) : setRightActive2(true);
    var elem = document.getElementById("timeDotRight2");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 3);
    function frame() {
      if (pos === 200) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.left = pos + "px";
      }
    }
  }

  return (
    <div className="history">
      <div>
        <h2 className="m-3">History</h2>
      </div>
      <div className={styles.timeline}>
        <div className={styles.left}>
          <div
            className={styles.container}
            id="timeDotLeft"
            onClick={myMoveLeft}
          ></div>
          <div className={leftActive1 ? styles.reveal : styles.hidden}>
            <div id="histCont">
              <h2>August 16, 2014</h2>
              <p>First watch party as the Arizona Spurs</p>
            </div>
          </div>
        </div>
        {/* <div className={styles.timeline}> */}
        <div className={styles.right}>
          <div
            className={styles.container}
            id="timeDotRight"
            onClick={myMoveRight}
          ></div>
          <div className={rightActive1 ? styles.reveal : styles.hidden}>
            <div id="histCont">
              <h2>August 13, 2016</h2>
              <p>First watch party at our current home, Fibber Magees</p>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* <div className={styles.timeline}> */}
        <div className={styles.left}>
          <div
            className={styles.container}
            id="timeDotLeft2"
            onClick={myMoveLeft2}
          ></div>
          <div className={leftActive2 ? styles.reveal : styles.hidden}>
            <div id="histCont">
              <h2>August xx, 2018</h2>
              <p>First watch party of season</p>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* <div className={styles.timeline}> */}
        <div className={styles.right}>
          <div
            className={styles.container}
            id="timeDotRight2"
            onClick={myMoveRight2}
          ></div>
          <div className={rightActive2 ? styles.reveal : styles.hidden}>
            <div id="histCont">
              <h2>August xx, 2018</h2>
              <p>First watch party of the season</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
