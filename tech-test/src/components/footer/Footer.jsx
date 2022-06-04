import React from "react";
import fb from "./fb.png";
import insta from "./insta.png";
import twitter from "./twitter.png";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="md:flex justify-around items-center">
        <div>
          <h4 className={styles.title_logo}>XYZ</h4>
          <p className={styles.paragraph}>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="flex justify-between gap-6 mt-5 w-36 items-center">
            <img src={fb} alt="" srcset="" />
            <img src={twitter} alt="" srcset="" />
            <img src={insta} alt="" srcset="" />
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col  mx-12">
            <h4 className={styles.title}>About Us</h4>
            <p className={styles.rights}>Whitepaper </p>
            <p className={styles.rights}>Blog</p>
            <p className={styles.rights}>Activity</p>
          </div>
          <div className="flex flex-col mx-12 ">
            <h4 className={styles.title}>Support</h4>
            <p className={styles.rights}>Help & Support</p>
            <p className={styles.rights}>Community</p>
            <p className={styles.rights}>Author Profile</p>
            <p className={styles.rights}>Contact</p>
          </div>{" "}
        </div>
      </div>
      <div className={`${styles.rights} flex justify-center h-24 items-center`}>
        All rights reserved, 2021
      </div>
    </footer>
  );
};

export default Footer;
