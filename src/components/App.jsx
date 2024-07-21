
import Product from "./Products";
export default function App() {
  return (
    <div >
      <Product style={{
      margin: 8,
      padding: "12px 16px",
      borderRadius: 4,
      backgroundColor: "orange",
      color: "tomato",
    }} name = {"P1"} price={111} imgUrl = {"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"}></Product>
      <Product name = {"P2"} price={232312} imgUrl = {"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"}/>
      <Product name = {"P3"} price={342343} imgUrl = {"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"}/>
    </div>
  );
}

