import React from "react";
import styles from "./recommand.module.css";
import binance from "./binance.png";
import coinbase from "./coinbase.png";
import blockchain from "./blockchain.png";
import bitmex from "./bitmex.png";

const Recommand = () => {
  return (
    <section>
      <div className="flex justify-evenly items-center ">
        <span className={styles.line}></span>
        <span className={styles.middle_txt}>Recommended By</span>
        <span className={styles.line}></span>
      </div>
      <div className="flex justify-evenly items-center mt-5">
        <img src={coinbase} alt="" srcset="" />
        <img src={blockchain} alt="" srcset="" />
        <img src={binance} alt="" srcset="" />
        <img src={bitmex} alt="" srcset="" />
      </div>
      <div className="flex items-center justify-center py-28">
        <div>
          <h2 className={styles.why}>Why Choose Us</h2>
          <p className={styles.desc_why}>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recommand;
