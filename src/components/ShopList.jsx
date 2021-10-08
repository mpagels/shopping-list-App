import { ShopItem } from "./ShopItem";

export const ShopList = ({ shoplist }) => {
  return (
    <div className="ShopList--main">
      <header className="ShopList--header">Shop Inventory 🏪</header>
      <div className="ShopList--list">
        {shoplist.map(({ name, category, inCart, id }) => (
          <ShopItem
            clicked={(item) => {}}
            key={id}
            name={name}
            category={category}
            inCart={inCart}
          />
        ))}
      </div>
    </div>
  );
};
