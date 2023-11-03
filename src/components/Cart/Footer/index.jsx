import "./_style.scss";

const Footer = ({ total }) => {
  const { totalCount, totalPrice } = total;
  const fPrice = new Intl.NumberFormat().format(totalPrice);
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{totalCount} одиниці</div>
      <div className="cart-footer__price">{fPrice} грн.</div>
    </footer>
  );
};

export default Footer;
