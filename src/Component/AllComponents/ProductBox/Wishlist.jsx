import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
// import { dataContext } from "../../context-api/DataProvider";
import { Helmet } from "react-helmet";
import { addToStoredAddToCard, getStoredWishlist } from "../../LocalStorege/stored";

const Wishlist = () => {
  const {pathname} = useLocation();
  // const {addToWishlist, handleAddWishlist,
  //   handleRemoveWishlist,} = useContext(dataContext);
  const [addToWishlist, setAddToWishlist] = useState([]);
  

  const allProductData = useLoaderData();

  useEffect(() => {
    const storedAddToWishlist = getStoredWishlist();

    const storedAddWishlistInt = storedAddToWishlist.map((id) => parseInt(id));
    // console.log(storedAddToCard, storedAddCardInt, allProductData);

    const addWishlist = allProductData.filter((product) =>
      storedAddWishlistInt.includes(product.product_id)
    );

    setAddToWishlist(addWishlist);
  }, []);

  const handleAddCart = (id) => {
    addToStoredAddToCard(id);

    const updatedWishlist = addToWishlist.filter(
      (product) => product.product_id !== id
    );
    setAddToWishlist(updatedWishlist);
    localStorage.setItem("addToWishlist", JSON.stringify(updatedWishlist));
  };

  const handleRemoveWishlist = (id) => {
    const updatedWishlist = addToWishlist.filter(
      (product) => product.product_id !== id
    );
    setAddToWishlist(updatedWishlist);
    localStorage.setItem("addToWishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="">
      <Helmet>
        <title>Gadget Heaven/Wishlist</title>
      </Helmet>
      <div
        className="bg-purple-600 lg:px-16 mx-2 md:mx-auto
        flex justify-center items-center h-[240px] md:h-[340px]"
      >
        <div className="text-center">
          <h1 className="text-xl lg:text-4xl text-white font-bold mt-5">
            Dashboard
          </h1>
          <p className="text-gray-200 mt-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to
            <br /> the coolest accessories, we have it all!
          </p>
          <div className="flex gap-x-4 mt-5 justify-center">
            <Link to="/cart">
              <button
                className={`py-2 px-8 border-2 border-purple-200 hover:bg-purple-300 hover:text-gray-700 text-lg font-semibold rounded-3xl
                              ${
                                pathname === "/cart"
                                  ? "bg-purple-200 text-gray-700"
                                  : "bg-none text-white"
                              }`}
              >
                Card
              </button>
            </Link>
            <Link to="/wishlist">
              <button
                className={`py-2 px-4 border-2 border-purple-200 hover:bg-purple-300 hover:text-gray-700 text-lg font-semibold rounded-3xl
                              ${
                                pathname === "/wishlist"
                                  ? "bg-purple-200 text-gray-700"
                                  : "bg-none text-white"
                              }`}
              >
                Wishlist
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:px-16 mx-2 md:mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Cart</h3>
        {/* Wish List Container */}
        {addToWishlist.length > 0 ? (
          addToWishlist.map(({ title, img, description, price, product_id }) => (
            <div className="bg-purple-200 border-2 border-purple-600 rounded-lg p-3 flex justify-between items-center mb-3">
              <div className="flex items-center gap-x-4" key={product_id}>
                <img className="w-32 h-28 rounded-md" src={img} alt={title} />
                <div className="">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-600 mb-1">
                      {title}
                    </h2>
                    <p className="text-gray-500 mb-1">{description}</p>
                    <p className="text-gray-600">Price: ${price}</p>
                    <button
                      onClick={() => handleAddCart(product_id)}
                      className="py-1 px-2 bg-purple-600 rounded-3xl text-white font-semibold mt-2 hover:shadow-xl"
                    >
                      Add To Card
                    </button>
                  </div>
                </div>
              </div>
              {/* remove button container */}
              <div className="">
                <button
                  onClick={() => handleRemoveWishlist(product_id)}
                  className=""
                >
                  <MdDeleteForever className="text-3xl text-red-500" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 text-center">
            Products not added to the Wishlist!
          </p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
