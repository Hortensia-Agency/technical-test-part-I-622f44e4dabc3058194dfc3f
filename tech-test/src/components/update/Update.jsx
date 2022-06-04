import React from "react";
import bg from "./bg.png";
import styles from "./update.module.css";
const Update = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})`, height: "410.04px" }}
      className="flex justify-center items-center "
    >
      <div>
        <h3 className={styles.title}>Ready to get updated?</h3>
        <p className={styles.paragraph}>
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.{" "}
        </p>
        <div className="flex mt-10" style={{ width: "656px", height: "75px" }}>
          <input
            className={styles.inpt_submit}
            placeholder="email"
            type="text"
            name=""
            id=""
          />
          <button className={styles.submit_btn}>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Update;
