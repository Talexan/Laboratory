import "./_style.scss";
import { setCount, getData } from "../../../Data";

const Count = ({ idProduct, count, hook }) => {
  return (
    <div className="product__count">
      <div className="count">
        <div className="count__box">
          <input
            type="number"
            className="count__input"
            min="1"
            value={count}
            onChange={(e) => {
              setCount(idProduct, e.target.value);
              hook(getData());
            }}
          />
        </div>
        <div className="count__controls">
          <div className="count__up">
            <button
              type="button"
              className="count__increase"
              onClick={() => {
                setCount(idProduct, ++count);
                hook(getData());
              }}
            >
              <img src="./img/icons/Shapearrow-up.svg" alt="increase" />
            </button>
          </div>
          <div className="count__down">
            <button
              type="button"
              className="count__decrease"
              onClick={() => {
                setCount(idProduct, count <= 2 ? 1 : --count);
                hook(getData());
              }}
            >
              <img src="./img/icons/Shapearrow-down.svg" alt="decrease" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
