import React from "react";
import styles from "./Header.module.css";
import { removeCredentials } from "../../hooks/useCredentials";

const Header: React.FC = () => {
  const handleLogout = () => {
    removeCredentials();
  };

  return (
    <header className={styles.header}>
      <h1>Marlin Backoffice Tool</h1>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;
