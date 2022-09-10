var initialState = [
  {
    id: 1,
    name: "Iphone",
    price: "200",
    status: true,
  },
  {
    id: 2,
    name: "Samsung",
    price: "200",
    status: true,
  },
  {
    id: 3,
    name: "Xiaomi",
    price: "200",
    status: true,
  },
];
const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
