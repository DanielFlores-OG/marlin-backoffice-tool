import { create } from "zustand";
import { Item, ItemHistory } from "../utils/types";

type DataStore = {
  items: Item[] | null;
  itemHistory: ItemHistory[] | null;
  loading: boolean;
  error: string;
  historyError: string;
  historyLoading: boolean;
};

const initialState: DataStore = {
  items: null,
  itemHistory: null,
  loading: false,
  error: "",
  historyError: "",
  historyLoading: false,
};

export const useData = create<DataStore>(() => initialState);

export const setItems = (items: Item[] | null) => {
  useData.setState({ items });
};

export const setItemHistory = (itemHistory: ItemHistory[] | null) => {
  useData.setState({ itemHistory });
};

export const setError = (error: string) => {
  useData.setState({ error });
};

export const setLoading = (loading: boolean) => {
  useData.setState({ loading });
};

export const setHistoryError = (historyError: string) => {
  useData.setState({ historyError });
};

export const setHistoryLoading = (historyLoading: boolean) => {
  useData.setState({ historyLoading });
};

export const restoreData = () => {
  useData.setState(initialState);
};
