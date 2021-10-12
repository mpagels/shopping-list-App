import styled from "styled-components";

export const MyCartItem = ({
  name,
  category,
  incart,
  handleUpdateOnClick,
  id,
}) => {
  const handleClickSelectedItem = () => {
    handleUpdateOnClick(id);
  };

  return (
    <StyleCartItem incart={incart} onClick={handleClickSelectedItem}>
      {name}
    </StyleCartItem>
  );
};

const StyleCartItem = styled.span`
  background-color: lightgray;
  border-radius: 3px;
  padding: 0.2rem;
  margin: 0.3rem;
`;
