import Image from "next/image";
import styles from "../styles/header.module.css";
import SideMenu from "./SideMenu";
const Header = () => {
  return (
    <header className={styles["header"]}>
      <p className={styles["msg"]}>White Friday Sales Up To 70% Off</p>
      <nav className={styles["nav"]}>
        <SideMenu />

        <Image
          className={styles["logo"]}
          src="/logo.svg"
          width={24}
          height={24}
          alt="logo"
        />
        <span className={styles["brand"]}> Store Locator </span>
        <div className={styles["search"]}>
          <input type="search" placeholder="Search" />
          <button className={styles["search-btn"]}>
            <Image src="/search.svg" width={24} height={24} alt="search" />
          </button>
        </div>

        <div className={styles["btns-box"]}>
          <button className={styles["lang-btn"]}> العربية </button>
          <button>
            <Image src="/user.svg" width={24} height={24} alt="profile" />
          </button>
          <button>
            <Image src="/cart.svg" width={24} height={24} alt="cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
