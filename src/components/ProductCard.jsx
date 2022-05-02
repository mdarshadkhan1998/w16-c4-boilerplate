import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  // console.log(item)
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}        
          <img src={item.image}/>
          <h3>{item.brand}</h3>
          <p>{item.price}</p>
          <p>{item.title}</p>
      </Flex>
    </>
  );
};
