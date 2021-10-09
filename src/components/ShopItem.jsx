export const ShopItem = ({ clicking, id, name, category, inCart }) => {
  const handleClick = () => {
    console.log({ inCart });
  };
  return (
    <span className="ShopItem--item" onClick={handleClick} key={id}>
      {name}
    </span>
  );
};
