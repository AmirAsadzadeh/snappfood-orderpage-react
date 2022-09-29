export const formatNumber = function (number) {
  return new Intl.NumberFormat("fa-IR").format(number);
};
