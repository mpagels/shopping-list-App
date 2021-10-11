export const MyCartItem = ({ name, category, incart, handleUpdateOnClick }) => {
  return (
    <span
      className={`ShopItem--${category}`}
      onClick={handleUpdateOnClick}
      incart={incart}
    >
      {name}
    </span>
  );
};
