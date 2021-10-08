import { useEffect, useState } from "react";

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key, defaultValue) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  setItem(key, defaultValue);
  return defaultValue;
};

export const useLocalStorageState = (key, devaultValue) => {
  const [value, setValue] = useState(getItem(key, devaultValue));

  useEffect(() => {
    setItem(key, value);
  }, [value]);

  const removeValue = () => {
    localStorage.removeItem(key);
  };

  return [value, setValue, removeValue];
};
