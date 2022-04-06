export const formatDate = (value) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const date = new Date(Date.parse(value)).toLocaleString("en-US", options);

  return date;
};
