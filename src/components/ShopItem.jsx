export const ShopItem = ({ handleClick, name, category, incart }) => {
  console.log("item returns", incart);
  return (
    <span
      className="ShopItem--item"
      category={category}
      incart={incart}
      // onClick={(event) => {
      //   handleClick(event.target);
      //   return console.log(event.target);
      // }}
    >
      {name}
    </span>
  );
};
