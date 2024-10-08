import React from "react";
import styles from "./MainLayout.module.css";
import Header from "../components/Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.content}>{children}</main>
    </>
  );
};

export default MainLayout;
