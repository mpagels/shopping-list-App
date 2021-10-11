import { useState, useEffect } from "react";

import { ShopList } from "./ShopList";
import { MyCartList } from "./MyCartList";
import "./Shop.css";
import { useLocalStorageState } from "../utils/localStorage";

export const Shop = () => {
  const [shoppingList, setList] = useLocalStorageState("shoppingList", []);
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
        setList(jsonCart);
        console.log("before Click Arr", shoppingList);
      } catch (error) {
        console.log("Upsi...Error:", error);
      }
    };
    fetchData();
  }, []);

  const [inshop, setinshop] = useState([]);
  const [incart, setcart] = useState([]);

  useEffect(() => {
    const inshop = shoppingList.filter((element) => element.incart === false);
    setinshop(inshop);
    const cartlist = shoppingList.filter((element) => element.incart === true);
    setcart(cartlist);
  }, [shoppingList]);

  const updateItem = (id) => {
    const indexOfClickedItem = shoppingList.findIndex(
      (element) => element.id === id
    );
    const clickedItem = shoppingList.find((element) => element.id === id);
    console.log("before Click", clickedItem);
    clickedItem.incart = !clickedItem.incart;
    console.log("after Click", clickedItem);
    console.log("afterClick Arr", shoppingList);
  };

  return (
    <div className="Shop--main">
      <header className="Shop--header">Wood's Sooper Dooper Shop</header>
      <ShopList
        shoplist={inshop}
        handleUpdateOnClick={updateItem /*returns Item Key*/}
      />
      <MyCartList
        cartlist={incart}
        handleUpdateOnClick={updateItem /*returns Item Key*/}
      />
    </div>
  );
};
