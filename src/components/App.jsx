const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};

import { UserMenu } from "./Icons";
import Product from "./Products";
export default function App() {
  return (
    <div >
      <UserMenu name="MAXIM"></UserMenu>
      <Product style={alertStyles} cl1="next" name = {"P1"} price={111} imgUrl = {"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"}></Product>
      <Product style={{...alertStyles, backgroundColor: "red"}} name = {"P2"} price={232312} imgUrl = {"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"}/>
      <Product style={alertStyles} name = {"P3"} price={342343} imgUrl = {"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"}/>
    </div>
  );
}

