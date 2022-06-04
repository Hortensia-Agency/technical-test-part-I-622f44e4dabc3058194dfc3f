import React from "react";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav>
      <div className={styles.nav_wrapper}>
        <a href="/" className={styles.xyz}>
          XYZ
        </a>
        <div className={styles.center_nav_wrapper}>
          <a href="/" className={styles.nav_item} style={{ color: "#F05830" }}>
            About Us
          </a>
          <a href="/" className={styles.nav_item}>
            Features
          </a>
          <a href="/" className={styles.nav_item}>
            how it works
          </a>
          <a href="/" className={styles.nav_item}>
            Support
          </a>
        </div>
        <div>
          <button className={styles.download_btn}>Download</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
