import "./_style.scss";
import Count from "../../Control/Сount";
import Delete from "../../Control/Delete";

const Product = ({ description, setCart }) => {
  let { id, name, img, count, totalPrice } = description;

  const fPrice = new Intl.NumberFormat().format(totalPrice);

  return (
    <section className="product">
      <div className="product__img">
        <img src={img} alt={name} />
      </div>
      <div className="product__name">{name}</div>
      <Count count={count} idProduct={id} hook={setCart} />
      <div className="product__price">{fPrice} грн.</div>
      <div className="product__control">
        <Delete hook={setCart} idProduct={id} />
      </div>
    </section>
  );
};

export default Product;
