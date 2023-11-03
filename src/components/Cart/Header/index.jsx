import "./_style.scss";

const Header = () => {
  return (
    <header className="cart-header">
      <div className="cart-header__title">найменування</div>
      <div className="cart-header__count">кількість</div>
      <div className="cart-header__price">вартість</div>
    </header>
  );
};

export default Header;
