import React, { useState } from "react";
import styles from "./DataForm.module.css";
import { searchQuery } from "../../api/api";
import { setError } from "../../hooks/useData";

const DataForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [attribute, setAttribute] = useState("");

  const handleSubmit = () => {
    if (!attribute || !inputValue) {
      setError("Please provide a valid input and select an attribute");
    }
    if (attribute && inputValue) {
      setError("");
      searchQuery({ value: inputValue, attribute });
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.selectWrapper}>
          <div className={styles.formGroup}>
            <label htmlFor="inputText" className={styles.label}>
              Input Value:
            </label>
            <input
              type="text"
              id="inputText"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              placeholder="Enter value"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="attributeSelect" className={styles.label}>
              Select Attribute:
            </label>
            <select
              id="attributeSelect"
              value={attribute}
              onChange={(e) => {
                setAttribute(e.target.value);
              }}
              className={styles.select}
            >
              <option disabled value="">
                Please select one
              </option>
              <option value="itemid">Fulfillment ID / SOPI</option>
              <option value="number">External Order Detail Number</option>
              <option value="ordernumber">Order Number</option>
              <option value="wid">Warehouse Tracking ID</option>
            </select>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className={styles.submitButton}
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default DataForm;
