import styled from "styled-components";

export const ShopItem = ({
  handleUpdateOnClick,
  id,
  name,
  category,
  incart,
  categoryDisplay,
}) => {
  const handleClickSelectedItem = () => {
    handleUpdateOnClick(id);
    console.log(category);
  };
  return (
    <StyleShopItem
      className="ShopItem--item"
      incart={incart}
      onClick={handleClickSelectedItem}
    >
      {name} {categoryDisplay(category)}
    </StyleShopItem>
  );
};

const StyleShopItem = styled.span`
  background-color: lightgray;
  border-radius: 3px;
  padding: 0.2rem;
  margin: 0.3rem;
`;
