export const getLocalStorage = (key: string) => {
  return typeof localStorage !== "undefined" ? localStorage.getItem(key) : null;
};

export const setLocalStorage = (key: string, value: string) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(key, value);
  }
};
