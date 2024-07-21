import PropTypes from 'prop-types';

/* eslint-disable react/jsx-key */
 const Product = ({name,price,imgUrl}) => {
  return (
    <div > 
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

