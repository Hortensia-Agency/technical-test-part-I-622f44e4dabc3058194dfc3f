import React from "react";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import mobile from "./mobile.png";
import styles from "./available.module.css";
const Available = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse my-20">
      <div className="flex justify-center items-center p-10">
        <div className="flex flex-col ">
          <h3 className={styles.title}>Available and Download Anytime!</h3>
          <p className={styles.paragraph}>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="flex justify-around pt-10">
            <img src={play_store} alt="" srcset="" />
            <img src={app_store} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className={styles.shape}>
        <img className={styles.mobile} src={mobile} alt="" srcset="" />
      </div>
    </section>
  );
};

export default Available;
