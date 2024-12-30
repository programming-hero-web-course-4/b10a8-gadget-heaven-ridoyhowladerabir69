import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { product_id, title, img, category, price } = product;

  return (
    <div className="card card-compact py-5 bg-base-100 shadow-xl">
      <figure>
        <img className="w-64 h-44 rounded-lg"
          src={img}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-gray-500"><span className="text-gray-600 font-semibold">Price :</span> {price}$</p>
        <div className="card-actions justify-end">
          <Link to={`/allProduct/${product_id}`}><button className="py-2 px-4 border-2 border-purple-600 rounded-3xl text-lg text-purple-600 hover:bg-purple-600 hover:text-white">View Detail</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
