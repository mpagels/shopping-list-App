export const MyCartItem = ({ name, category, incart, handleUpdateOnClick }) => {
  return (
    <span
      className={`ShopItem--${category}`}
      onClick={(event) => {}}
      incart={incart}
    >
      {name}
    </span>
  );
};
