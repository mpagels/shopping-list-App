import { useState, useEffect } from "react";
import { useLocalStorageState } from "../utils/localStorage";
import { ShopList } from "./ShopList";
import { MyCartList } from "./MyCartList";
import "./Shop.css";

export const Shop = () => {
  const [shoppingList, setshoppingList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fetch-me.vercel.app/shopping-list.json"
        );
        const json = await response.json();
        const jsonCart = json.map((element) => {
          return { ...element, incart: false };
        });
        setshoppingList(jsonCart);
        console.log(jsonCart);
      } catch (error) {
        console.log("Upsi...Error", error);
      }
    };
    fetchData();
  }, []);

  const [inshoppingcart, setshoppingcart] = useState([]);
  useEffect(() => {
    const cartlist = shoppingList.filter((element) => element.incart === true);
    setshoppingcart(cartlist);
  }, [shoppingList]);

  return (
    <div className="Shop--main">
      <header className="Shop--header">Wood's Sooper Dooper Shop</header>
      <ShopList
        // handleClick={(value) => {
        //   console.log("click returns", value);
        // }}
        shoplist={shoppingList}
      />
      <MyCartList
        // handleClick={(value) => {
        //   value = value;
        //   console.log(value);
        // }}
        cartlist={inshoppingcart}
      />
    </div>
  );
};
