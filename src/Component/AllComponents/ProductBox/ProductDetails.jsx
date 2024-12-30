import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { RxStarFilled } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
// import { useContext } from 'react';
// import { dataContext } from '../../context-api/DataProvider';
import { Helmet } from 'react-helmet';
import { addToStoredAddToCard, addToStoredWishlist } from '../../LocalStorege/stored';

const ProductDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();

  const product = data.find((product) => product.product_id === id);
  const { img, title, price, availability, description, specification, rating } = product;

  // Access context functions
  // const { handleCart, handleWishlistAdded } = useContext(dataContext);

  const handleAddToCard = (id) => {
    addToStoredAddToCard(id)
  };

  const handleAddToWishlist = (id) => {
    addToStoredWishlist(id)
  };

  return (
    <div>
        <Helmet>
            <title>Gadget Heaven/Details</title>
        </Helmet>
      <div className="bg-purple-600 lg:px-16 mx-2 md:mx-auto flex justify-center h-[280px] md:h-[400px]">
        <div className="mt-4 text-center">
          <h2 className="text-4xl font-semibold text-white">Product Details</h2>
          <p className="text-gray-200 mt-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>
      </div>
      <div className="border-2 bg-slate-200 rounded-xl p-4 w-[900px] mx-auto z-40 -mt-56">
        <div className="flex gap-x-14">
          <div>
            <img src={img} alt={title} className="w-[380px] h-[440px] rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">{title}</h2>
            <p className="text-gray-500 text-lg"><span className="font-semibold">Price : </span>{price}$</p>
            <button className={`py-1 px-3 border-2 rounded-3xl mt-3 ${availability === true ? 'border-green-500 text-green-500 bg-green-100' : 'border-red-500 text-red-500 bg-red-200'}`}>
              {availability === true ? 'In Stock' : 'Out of Stock'}
            </button>
            <p className="mt-2 text-gray-500">{description}</p>
            <div className="mb-3">
              <p className="text-lg font-semibold text-gray-600 mb-1 mt-3">Specification :</p>
              {specification.map((specific, idx) => <ul key={idx} className="text-gray-500 mb-2">{specific}</ul>)}
            </div>
            <p className="text-lg font-semibold text-gray-600 mb-1">Rating :</p>
            <p className="text-gray-500 font-semibold flex items-center">
              <RxStarFilled className="text-xl text-yellow-500" />
              <RxStarFilled className="text-xl text-yellow-500" />
              <RxStarFilled className="text-xl text-yellow-500" />
              <RxStarFilled className="text-xl text-yellow-500" />
              <RxStarFilled className="text-xl" />
              <span className="ml-4 py-1 px-2 bg-purple-100 rounded-2xl">{rating}</span>
            </p>
            <div className="mt-3 flex gap-x-8">
              <button onClick={() => handleAddToCard(product_id)} className="flex items-center gap-x-2 py-2 px-4 bg-purple-600 rounded-3xl text-lg text-white font-semibold hover:bg-purple-700">
                Add to Cart <AiOutlineShoppingCart className="text-2xl" />
              </button>
              <div onClick={() => handleAddToWishlist(product_id)} className="bg-white rounded-full p-2 flex justify-center items-center hover:bg-purple-300">
                <MdFavoriteBorder className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
