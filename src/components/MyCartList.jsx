import { MyCartItem } from "./MyCartItem";

export const MyCartList = ({ cartlist }) => {
  return (
    <div className="MyCartList--main">
      <header className="MyCartList--header">My shopping Cart 🛒</header>
      <div className="MyCartList--list">
        {cartlist.map(({ category, name }) => (
          <MyCartItem category={category} name={name} id={id} />
        ))}
      </div>
    </div>
  );
};
