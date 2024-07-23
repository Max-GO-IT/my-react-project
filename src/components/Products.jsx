import PropTypes from 'prop-types';
import clsx from "clsx";



/* eslint-disable react/jsx-key */
 const Product = ({name,price,imgUrl,children,style,cl1,cl2,cl3}) => {
  return (
    <div className={clsx(
      "alert",cl1,cl2,cl3      
    )} style = {style}> {children}
      <h2>{name}</h2>
			<img src= {imgUrl} alt="Tacos With Lime" width="640" />
      <p>Price: {price} credits</p>
    </div>
  );
};


Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;

