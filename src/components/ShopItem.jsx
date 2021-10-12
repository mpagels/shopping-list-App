import styled from "styled-components";

export const ShopItem = ({
  handleUpdateOnClick,
  id,
  name,
  category,
  incart,
}) => {
  const categoryDisplay = (category) => {
    switch (category) {
      case "Gemüse":
        return "🥕";
      case "Fleisch":
        return "🍗";
      case "Backwaren":
        return "🍞";
      case "Getränke":
        return "🥤";
      case "Milchprodukte":
        return "🐄";
      case "Teigwaren":
        return "🥐";
      case "WTF":
        return "💥";
      default:
        return "💩";
    }
  };

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
