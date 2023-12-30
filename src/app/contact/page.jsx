import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Sikku Creation - Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" id="name" autoComplete="off" />
          <input type="text" placeholder="Email Address" id="email" autoComplete="off" />
          <input type="text" placeholder="Phone Number (Optional)" id="phone" autoComplete="off" />
          <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;