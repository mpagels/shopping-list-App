import { MyCartItem } from "./MyCartItem";

export const MyCartList = ({ cartlist, handleUpdateOnClick }) => {
  return (
    <div className="MyCartList--main">
      <header className="MyCartList--header">My shopping Cart 🛒</header>
      <div className="MyCartList--list">
        {cartlist.map(({ category, name, id, incart }) => (
          <MyCartItem
            handleUpdateOnClick={handleUpdateOnClick}
            category={category}
            name={name}
            key={id}
            incart={incart}
            id={id}
          />
        ))}
      </div>
    </div>
  );
};
