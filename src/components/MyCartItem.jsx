export const MyCartItem = ({
  name,
  category,
  incart,
  handleUpdateOnClick,
  id,
}) => {
  const handleClickSelectedItem = () => {
    handleUpdateOnClick(id);
  };

  return (
    <span
      className="ShopItem--item"
      incart={incart}
      onClick={handleClickSelectedItem}
    >
      {name}
    </span>
  );
};
