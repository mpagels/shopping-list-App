import { useState, useEffect } from "react";
import styled from "styled-components";
import { ShopList } from "./ShopList";
import { MyCartList } from "./MyCartList";
import { useLocalStorageState } from "../utils/localStorage";

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
  const categoryDisplay = (category) => {
    return (
      {
        Gemüse: "🥕 **",
        Fleisch: "🍗 *",
        Backwaren: "🍞",
        Getränke: "🥤 **",
        Milchprodukte: "🐄",
        Teigwaren: "🥐",
        WTF: "💥 *",
      }[category] || "💩" //<-- or default
    );
  };

  return (
    <StyleShop>
      <StyleShopHeader>Wood's Sooper Dooper Shop</StyleShopHeader>

      {/* <input type="checkbox" id="categorie-toggle" name="categorie-toggle">Categories *, **</input> <-- toggle categories wip*/}

      <ShopList
        shoplist={inshopList}
        categoryDisplay={categoryDisplay}
        handleUpdateOnClick={updateItem /*returns Item id */}
      />
      <MyCartList
        cartlist={incartList}
        categoryDisplay={categoryDisplay}
        handleUpdateOnClick={updateItem /*returns Item id */}
        // toggleCategorieView={
        //   toggleCategorie /* add category symbol and colors / <--- wip maybe hacky? */
        // }
      />
      <StyleFinePrint>* contains Meat, ** vegan</StyleFinePrint>
    </StyleShop>
  );
};

const StyleShop = styled.div`
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 1rem;
`;

const StyleShopHeader = styled.h3`
  font-style: italic;
  text-align: center;
`;

const StyleFinePrint = styled.span`
  font-size: 12px;
  font-style: italic;
`;
