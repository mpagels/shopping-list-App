export const ShopItem = ({ clicking, id, name, category, inCart }) => {
  const handleClick = (event) => {
    clicking(event.target);
    inCart = !inCart;
  };
  return (
    <span className="ShopItem--item" onClick={handleClick} key={id}>
      {name}
    </span>
  );
};
