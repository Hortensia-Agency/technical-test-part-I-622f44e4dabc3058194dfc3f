import React from "react";
import styles from "./intro.module.css";

import pngaaa4 from "./pngaaa4.png";
import player from "./player.png";
const Intro = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse  gap-20">
      <div className={styles.intro_1}>
        <span className={styles.phrase1}>
          Save Time and Start Digital Wallet!
        </span>
        <p className={styles.phrase2}>
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's{" "}
        </p>
        <div className="flex  gap-10 mt-10">
          <button className={styles.get_started_btn}>Get Started</button>
          <div className="flex  gap-6 items-center justify-between">
            <img src={player} alt="" srcset="" />
            <span className={styles.watch_vid}>Watch Video</span>
          </div>
        </div>
        <div className="flex gap-8 ">
          <div className=" py-6">
            <span className={styles.nbrs}>1.9k+</span>
            <p className={styles.desc_nbrs}>Active Users</p>
          </div>
          <div className=" py-6">
            <span className={styles.nbrs}>20+</span>
            <p className={styles.desc_nbrs}>New Features</p>
          </div>
        </div>
      </div>
      <div className="py-0.5 w-full">
        <div className={styles.shape}>
          <img
            src={pngaaa4}
            style={{ transform: "rotate(180deg)", marginTop: "50px" }}
            alt=""
            srcset=""
            className="img_1"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
