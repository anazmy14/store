import { useState } from "react";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Link from "next/link";

const links = [
  {
    label: "Top Deals",
    link: "",
  },
  {
    label: "Deals of the Day",
    link: "",
  },
  {
    label: "Men",
    link: "",
  },
  {
    label: "Women",
    link: "",
  },
  {
    label: "Kids",
    link: "",
  },
  {
    label: "Brands",
    link: "",
  },
  {
    label: "Brands",
    link: "",
  },
  {
    label: "Sport",
    link: "",
  },
  {
    label: "Accessories",
    link: "",
  },
  {
    label: "Sale",
    link: "",
  },
];

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenBtn = () => {
    setIsOpen(true);
  };

  const handleCloseBtn = () => {
    setIsOpen(false);
  };

  if (!isOpen)
    return (
      <button className={styles["menu-btn"]} onClick={handleOpenBtn}>
        <Image src="/menu.svg" width={32} height={32} alt="menu" />
      </button>
    );

  return (
    <menu className={styles["side-menu"]}>
      <button className={styles["side-menu__colse"]} onClick={handleCloseBtn}>
        <Image src="/close.svg" width={32} height={32} alt="close" />
      </button>
      <div className={styles["side-menu__logo"]}>
        <Image src="/logo.svg" width={24} height={24} alt="logo" />
        <span> Store Locator </span>
      </div>
      {links.map((link) => (
        <Link href={link.link} key={link.label}>
          {link.label}
        </Link>
      ))}
      <button className={styles["side-menu__lang"]}> العربية </button>
    </menu>
  );
};

export default SideMenu;
