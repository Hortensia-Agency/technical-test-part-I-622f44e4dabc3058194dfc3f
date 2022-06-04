import React from "react";
import styles from "./navbar.module.css";
import down from "./down.png";
const Navbar = () => {
  return (
    <nav className="sm:flex flow-root">
      <div className={`${styles.nav_wrapper} float-right`}>
        <a href="/" className={styles.xyz}>
          XYZ
        </a>
        <span className="hidden sm:block ">
          <div className={`${styles.center_nav_wrapper}`}>
            <a
              href="/"
              className={styles.nav_item}
              style={{ color: "#F05830" }}
            >
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
        </span>
        <div className="hidden sm:block ">
          <button className={styles.download_btn}>Download</button>
        </div>
        <div className=" sm:hidden float-right flex justify-end">
          <img src={down} alt="" srcset="" />{" "}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
