import { ShopItem } from "./ShopItem";

export const ShopList = ({ shoplist, handleClick }) => {
  return (
    <div className="ShopList--main">
      <header className="ShopList--header">Shop Inventory 🏪</header>
      <div className="ShopList--list">
        {shoplist.map(({ name, category, incart, id }) => (
          <ShopItem
            handleClick={handleClick}
            key={id}
            name={name}
            category={category}
            incart={incart}
          />
        ))}
      </div>
    </div>
  );
};
