import styled from "styled-components";

import { MyCartItem } from "./MyCartItem";

export const MyCartList = ({
  cartlist,
  handleUpdateOnClick,
  categoryDisplay,
}) => {
  return (
    <StyleCartListMain>
      <StyleCartListHeader>My shopping Cart 🛒</StyleCartListHeader>
      <StyleCartList>
        {cartlist.map(({ category, name, id, incart }) => (
          <MyCartItem
            handleUpdateOnClick={handleUpdateOnClick}
            categoryDisplay={categoryDisplay}
            category={category}
            name={name}
            key={id}
            incart={incart}
            id={id}
          />
        ))}
      </StyleCartList>
    </StyleCartListMain>
  );
};

const StyleCartListMain = styled.div`
  border: 1px solid rgb(102, 51, 153);
  background-color: rgba(102, 51, 153, 0.2);
  margin: 1rem;
`;

const StyleCartListHeader = styled.h4``;

const StyleCartList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.2rem;
  border: 1px solid rgb(107, 142, 35);
  background-color: rgba(107, 142, 35, 0.3);
`;
