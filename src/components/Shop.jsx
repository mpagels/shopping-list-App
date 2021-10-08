import { useState, useEffect } from "react";

import { ShopList } from "./ShopList";
import { MyCartList } from "./MyCartList";
import "./Shop.css";

export const Shop = () => {
  const [shoppingList, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fetch-me.vercel.app/shopping-list.json"
        );
        const json = await response.json();
        const jsonCart = json.map((element) => {
          return { ...element, inCart: false };
        });
        setList(jsonCart);
      } catch (error) {
        console.log("Upsi...Error", error);
      }
    };
    fetchData();
  }, []);

  const [incart, setcart] = useState([]);
  useEffect(() => {
    const cartlist = shoppingList.filter((element) => element.incart === true);
    setcart(cartlist);
  }, [shoppingList]);

  return (
    <div className="Shop--main">
      <header className="Shop--header">Wood's Sooper Dooper Shop</header>
      <ShopList shoplist={shoppingList} />
      <MyCartList cartlist={incart} />
    </div>
  );
};
