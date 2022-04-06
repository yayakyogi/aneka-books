export const storeData = (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getData = (key) => {
  try {
    const jsonValue = localStorage.getItem(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e.message);
  }
};

export const clearItem = (item) => {
  return localStorage.removeItem(item);
};

export const clearAllData = () => {
  return localStorage.clear();
};
