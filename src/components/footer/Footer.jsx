import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Sikku Creation</div>
      <div className={styles.text}>
        Sikku Creation © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;