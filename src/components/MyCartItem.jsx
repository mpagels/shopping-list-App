export const MyCartItem = ({ id, name, category, incard }) => {
  return (
    <span className={`ShopItem--${category}`} onClick={handleClick} key={id}>
      {name}
    </span>
  );
};
