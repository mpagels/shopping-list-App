export const ShopItem = ({
  handleUpdateOnClick,
  id,
  name,
  category,
  incart,
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
