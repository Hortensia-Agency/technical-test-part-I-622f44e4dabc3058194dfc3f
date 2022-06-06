import React from "react";
import bg from "./bg.png";
import styles from "./update.module.css";
const Update = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="flex justify-center items-center p-10"
    >
      <div>
        <h3 className={styles.title}>Ready to get updated?</h3>
        <p className={styles.paragraph}>
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.{" "}
        </p>
        <div
          className="md:flex  my-10 "
          style={{ maxWidth: "656px", maxHeight: "75px" }}
        >
          <input
            className={styles.inpt_submit}
            placeholder="email"
            type="text"
            name=""
            id=""
          />
          <span className="md:my-0 my-10 flex">
            <button className={`${styles.submit_btn}`}>Submit</button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Update;
