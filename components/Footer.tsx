import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["links"]}>
        <h3> Active Trending </h3>
        <h3> About Us </h3>
        <Link href=""> Men </Link>
        <Link href=""> Women </Link>
        <Link href=""> Kids </Link>
        <Link href=""> About Company </Link>
        <Link href=""> Connect Us </Link>
        <Link href=""> Our Branches</Link>
      </div>
      <p>Copyright © 2022 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
