import { useState, useEffect } from "react";

import { ShopList } from "./ShopList";
import { MyCartList } from "./MyCartList";
import "./Shop.css";
import { setItem, useLocalStorageState } from "../utils/localStorage";

export const Shop = () => {
  const [shoppingList, setShoppingList] = useLocalStorageState(
    "shoppingList",
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      if (shoppingList.length < 1) {
        try {
          const response = await fetch(
            "https://fetch-me.vercel.app/shopping-list.json"
          );
          const json = await response.json();
          const jsonCart = json.map((element) => {
            return { ...element, incart: false };
          });
          setShoppingList(jsonCart);
          console.log("before Click Arr", shoppingList);
        } catch (error) {
          console.log("Upsi...Error:", error);
        }
      }
    };
    fetchData();
  }, []);

  const [inshopList, setinshopList] = useState([]);
  const [incartList, setcartList] = useState([]);

  const updateItem = (id) => {
    const clickedItem = shoppingList.find((element) => element.id === id);
    clickedItem.incart = !clickedItem.incart;
    setShoppingList([...shoppingList]);
  };

  useEffect(() => {
    const inshopList = shoppingList.filter(
      (element) => element.incart === false
    );
    setinshopList(inshopList);
    const cartlist = shoppingList.filter((element) => element.incart === true);
    setcartList(cartlist);
  }, [shoppingList /* <---- this was missing Anita ;-)  */]);

  // const [toggleCategorie, setToggleCategoryView] = useState([false]);

  return (
    <div className="Shop--main">
      <header className="Shop--header">Wood's Sooper Dooper Shop</header>

      {/* <input type="checkbox">Categories *, **</input> <-- toggle categories wip*/}

      <ShopList
        shoplist={inshopList}
        handleUpdateOnClick={updateItem /*returns Item id*/}
      />
      <MyCartList
        cartlist={incartList}
        handleUpdateOnClick={updateItem /*returns Item id*/}
        // toggleCategorieView={
        //   toggleCategorie /* add category symbol and colors / <--- wip maybe hacky? */
        // }
      />
      <span>* contains Meat, ** vegan</span>
    </div>
  );
};
