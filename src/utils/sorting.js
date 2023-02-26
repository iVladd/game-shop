export const sorting = (arr, sortProperty) => {
  const copiedArr = [...arr];
  switch (sortProperty) {
    case "rating":
      return copiedArr.sort((a, b) => b.rating - a.rating);
    case "-rating":
      return copiedArr.sort((a, b) => a.rating - b.rating);
    case "price":
      return copiedArr.sort((a, b) => b.price - a.price);
    case "-price":
      return copiedArr.sort((a, b) => a.price - b.price);
    case "title":
      return copiedArr.sort((a, b) => (a.title > b.title ? -1 : 1));
    case "-title":
      return copiedArr.sort((a, b) => (a.title < b.title ? -1 : 1));

    default:
      return copiedArr;
  }
};
