// styles
import "./_base.scss";
import "./_reset.scss";
import "./_vars.scss";
import "./_section-cart.scss";

// components
import "../Title";
import Title from "../Title";
import Header from "../Cart/Header";
import Footer from "../Cart/Footer";
import Product from "../Cart/Product";
import { getData } from "../../Data";
import { useState } from "react";

//implements
const setTitle = () => "Кошик товарів";

const initialTotal = () => {
  return {
    totalCount: 0,
    totalPrice: 0,
  };
};

const App = () => {
  const descriptions = getData();
  const total = initialTotal();

  let [cart, setCart] = useState(descriptions);

  const products = cart.map((product) => {
    total.totalCount += +product.count;
    total.totalPrice += +product.totalPrice;
    return <Product description={product} setCart={setCart} key={product.id} />;
  });

  return (
    <section className="section-cart">
      <header className="section-cart__header">
        <div className="container">
          <Title title={setTitle()} />
        </div>
      </header>
      <section className="section-cart__body">
        <div className="container">
          <section className="cart">
            <Header />
            {products}
            <Footer total={total} />
          </section>
        </div>
      </section>
    </section>
  );
};

export default App;
