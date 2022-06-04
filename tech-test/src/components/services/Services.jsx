import React from "react";
import styles from "./services.module.css";
import bank from "./bank.png";
import pay from "./pay.png";
import invest from "./invest.png";
import print from "./print.png";
import secure from "./secure.png";
import secure2 from "./secure2.png";
const Services = () => {
  const services = [
    {
      icon: bank,
      title: "Digital Saving",
      text:
        "A Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: invest,
      title: "Online Investment",
      text:
        "A Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: secure,
      title: "Secure and Fast",
      text:
        "A Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: pay,
      title: "Purchase via Cards",
      text:
        "A Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: print,
      title: "Instant and fee-freetransaction",
      text:
        "A Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: secure2,
      title: "Secure and Fast",
      text:
        "A Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  return (
    <section className="grid grid-cols-3 xs:grid-cols-2">
      {services.map((service, i) => (
        <div className={`${i === 0 ? styles.first_card : ""} ${styles.card}`}>
          <img src={service.icon} alt="" srcset="" />
          <h3>Digital Saving</h3>
          <p>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
      ))}
    </section>
  );
};

export default Services;
