import styled from "styled-components";
import { ShopItem } from "./ShopItem";

export const ShopList = ({ shoplist, handleUpdateOnClick }) => {
  return (
    <StyleShopListMain>
      <StyleShopListHeader>Shop Inventory 🏪</StyleShopListHeader>
      <StyleShopList>
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
      </StyleShopList>
    </StyleShopListMain>
  );
};

const StyleShopListMain = styled.div`
  border: 1px solid rgb(218, 165, 32);
  background-color: rgba(218, 165, 32, 0.2);
  margin: 1rem;
`;

const StyleShopListHeader = styled.h4``;

const StyleShopList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.2rem;
  border: 1px solid rgb(218, 112, 214);
  background-color: rgba(218, 112, 214, 0.2);
`;
