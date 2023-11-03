let data = [
  {
    id: 0,
    name: "Apple MacBook Air 13",
    img: "./img/products/macbook.jpg",
    count: 1,
    price: 110000,
    totalPrice: 110000,
  },
  {
    id: 1,
    name: "Apple watch",
    img: "./img/products/apple-watch-nike-plus.jpg",
    count: 1,
    price: 29000,
    totalPrice: 29000,
  },
  {
    id: 2,
    name: "Mac Pro",
    img: "./img/products/mac-pro.jpg",
    count: 1,
    price: 190000,
    totalPrice: 190000,
  },
];

const getData = () => {
  return data;
};

const deleteData = (id) => {
  const delElem = {};
  data = data.filter((elem) => {
    if (elem.id !== id) {
      Object.assign(delElem, elem);
      return true;
    }
    return false;
  });
  return delElem;
};

const setCount = (id, count) => {
  const old = data;
  data = data.map((data) => {
    if (data.id === id) {
      return { ...data, count: count, totalPrice: data.price * count };
    }
    return { ...data };
  });

  return old;
};

export { getData, deleteData, setCount };
