import { deleteData, getData } from "../../../Data";

const Delete = ({ hook, idProduct }) => {
  return (
    <button
      type="button"
      onClick={() => {
        deleteData(idProduct);
        hook(getData());
      }}
    >
      <img src="./img/icons/xbutton-delete.svg" alt="delete" />
    </button>
  );
};

export default Delete;
