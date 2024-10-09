import React from "react";
import styles from "./Header.module.css";
import { removeCredentials } from "../../hooks/useCredentials";
import { restoreData } from "../../hooks/useData";

const Header: React.FC = () => {
  const handleLogout = () => {
    removeCredentials();
    restoreData();
  };

  return (
    <header className={styles.header}>
      <h1>Marlin Backoffice Tool</h1>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;
