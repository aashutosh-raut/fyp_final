import { ID, TOKEN_NAME } from "./constants";

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(TOKEN_NAME) || "";
  }
  return "";
};

export const getId = () => {
  if (typeof window !== "undefined") return localStorage.getItem(ID) || "";
  return "";
};

export const setToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_NAME, token);
  }
};

export const setId = (id: string) => {
  if (typeof window !== "undefined") localStorage.setItem(ID, id);
};

export const deleteToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(TOKEN_NAME);
  }
};

export const deleteId = () => {
  if (typeof window !== "undefined") localStorage.removeItem(ID);
};
