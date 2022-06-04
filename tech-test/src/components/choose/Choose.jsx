import React from "react";
import styles from "./choose.module.css";
import laptop from "./laptop.png";
const Choose = () => {
  return (
    <section className="grid grid-cols-2 gap-36">
      <div className={styles.shape}>
        <img
          style={{ width: "597.81px", height: "597.81px" }}
          src={laptop}
          alt=""
          srcset=""
        />
      </div>
      <div className="pr-10">
        <h3 className={styles.title}>
          Choose and Convert your Wallet Anytime!
        </h3>
        <p className={styles.paragraph}>
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown. A Lorem Ipsum is simply dummy text
          of the printing and typesetting industry.{" "}
        </p>
        <button className={styles.choose_btn}>Choose your wallet</button>
      </div>
    </section>
  );
};

export default Choose;
