import axios, { AxiosError, AxiosInstance } from "axios";
import { Item, ItemHistory, Query } from "../utils/types";
import { useCredentials } from "../hooks/useCredentials";
import {
  setItems,
  setError,
  setLoading,
  setItemHistory,
  setHistoryError,
  setHistoryLoading,
} from "../hooks/useData";
import { mockFindItem, mockFindItemHistory } from "./mockQuery";

const credentials = useCredentials.getState().credentials;

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: `Basic ${credentials}`,
  },
});

export const searchQuery = async (query: Query) => {
  setLoading(true);
  const items =
    import.meta.env.MODE === "dev"
      ? mockFindItem(query)
      : await searchItemInDB(query);
  setItems(items);
  setItemHistory(null);
  setLoading(false);
};

const searchItemInDB = ({
  value,
  attribute,
}: Query): Promise<Item[] | null> => {
  return apiClient
    .get<Item[]>(`/items/search/${attribute}/${value}`)
    .then((response) => response.data)
    .catch((err: AxiosError) => {
      setError(err.message);
      return null;
    });
};

export const searchItemHistory = async (id: string) => {
  setItemHistory([]);
  setHistoryLoading(true);
  const itemHistory =
    import.meta.env.MODE === "dev"
      ? mockFindItemHistory(id)
      : await searchItemHistoryInDB(id);
  setItemHistory(itemHistory);
  setHistoryLoading(false);
};

const searchItemHistoryInDB = (id: string): Promise<ItemHistory[] | null> => {
  return apiClient
    .get<ItemHistory[]>(`/history/item/${id}`)
    .then((response) => response.data)
    .catch((err: AxiosError) => {
      setHistoryError(err.message);
      return [];
    });
};
