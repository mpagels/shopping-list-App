import { useState, useEffect } from "react";

import { ShopList } from "./ShopList";
import { MyCartList } from "./MyCartList";

export const Shop = () => {
  const [shoppingList, setList] = useState("");
  useEffect(() => {
    const url = "https://fetch-me.vercel.app/shopping-list.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setList(json);
      } catch (error) {
        console.log("Upsi...Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="shop--main">
      <header className="shop--header"></header>
      <ShopList />
      <MyCartList />
    </div>
  );
};
