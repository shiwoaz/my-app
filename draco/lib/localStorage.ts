export type localStorFunc = (key: string, value: any) => void;

export type localGetFunc = (key: string) => any;

const localStor: localStorFunc = (key, value) => {
  localStorage.setItem(key, value);
};

export const localGet: localGetFunc = (key) => {
  return localStorage.getItem(key);
};

export default localStor;
