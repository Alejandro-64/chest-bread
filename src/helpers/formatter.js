const formatter = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
});

export const formatterPrice = (price) => {
  return formatter.format(price);
};

export const formatterText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
