import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CredentialsStore = {
  credentials: string;
};

const initialState: CredentialsStore = {
  credentials: "",
};

const env = import.meta.env.MODE;

export const useCredentials = create(
  persist<CredentialsStore>(() => initialState, {
    name: `creds_${env}`,
    storage: createJSONStorage(() => sessionStorage),
  })
);

export const setCredentials = (credentials: string) =>
  useCredentials.setState({ credentials: btoa(credentials) });

export const removeCredentials = () =>
  useCredentials.setState({ credentials: "" }, true);
