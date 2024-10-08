import React from "react";
import DataForm from "../DataForm/DataForm";
import ItemTable from "../ItemTable/ItemTable";
import ItemHistoryTable from "../ItemHistoryTable/ItemHistoryTable";
import Modal from "../Modal/Modal";
import { setHistoryError, setItemHistory, useData } from "../../hooks/useData";
import styles from "./DataContent.module.css";

const DataContent: React.FC = () => {
  const items = useData((state) => state.items);
  const itemHistory = useData((state) => state.itemHistory);
  const error = useData((state) => state.error);
  const loading = useData((state) => state.loading);

  const showTable = !error && !loading;

  const onCloseModal = () => {
    setItemHistory(null);
    setHistoryError("");
  };

  return (
    <>
      <DataForm />
      {error && <div className={styles.errorMessage}>{error}</div>}
      {loading && <div className={styles.spinner}></div>}
      {items && showTable && <ItemTable data={items} />}
      {itemHistory && showTable && (
        <Modal onClose={onCloseModal}>
          <ItemHistoryTable itemHistory={itemHistory} />
        </Modal>
      )}
    </>
  );
};

export default DataContent;
