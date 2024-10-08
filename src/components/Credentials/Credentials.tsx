import React, { useState } from "react";
import styles from "./Credentials.module.css";
import { setCredentials } from "../../hooks/useCredentials";

const Credentials: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitCredentilals = () => {
    setCredentials(inputValue || "_");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Credentials</h2>
      <input
        type="text"
        className={styles.inputField}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Please enter username:password"
      />
      <button className={styles.addButton} onClick={submitCredentilals}>
        Submit
      </button>
    </div>
  );
};

export default Credentials;
