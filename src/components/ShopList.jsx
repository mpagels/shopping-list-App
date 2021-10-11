import { ShopItem } from "./ShopItem";

export const ShopList = ({ shoplist, handleUpdateOnClick }) => {
  return (
    <div className="ShopList--main">
      <header className="ShopList--header">Shop Inventory 🏪</header>
      <div className="ShopList--list">
        {shoplist.map(({ name, category, incart, id }) => (
          <ShopItem
            handleUpdateOnClick={handleUpdateOnClick}
            key={id}
            name={name}
            category={category}
            incart={incart}
            id={id}
          />
        ))}
      </div>
    </div>
  );
};
