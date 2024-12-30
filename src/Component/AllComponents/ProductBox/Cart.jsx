import { MdDeleteForever } from "react-icons/md";
import modalImg from "../../../assets/Group.png";
import { Link, useLoaderData, useLocation } from "react-router-dom";
// import { useContext } from "react";
// import { dataContext } from "../../context-api/DataProvider";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { getStoredAddToCard } from "../../LocalStorege/stored";

const Cart = () => {
  const { pathname } = useLocation();
  // const {
  //   addCart,
  //   handleRemove,
  //   totalCost,
  //   handleSort,
  //   handlePurchase,
  //   showModal,
  //   setShowModal,
  // } = useContext(dataContext);

  const [addCart, setAddCart] = useState([]);
  const [sort, setSort] = useState("");
  const [showModal, setShowModal] = useState(false);

  const allProductData = useLoaderData()

  useEffect(() => {
    const storedAddToCart = getStoredAddToCard();

    const storedAddCartInt = storedAddToCart.map((id) => parseInt(id));
    const addToCart = allProductData.filter((product) =>
      storedAddCartInt.includes(product.product_id)
    );
    setAddCart(addToCart);
  }, []);

  //Remove item from cart
  const handleRemove = (id) => {
    const updatedCart = addCart.filter((product) => product.product_id !== id);
    setAddCart(updatedCart);
    localStorage.setItem("addToCart", JSON.stringify(updatedCart));
  };

  // Sort Price
  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "asc") {
      const sortAsc = [...addCart].sort((a, b) => a.price - b.price);
      setAddCart(sortAsc);
    }
  };

  // Purchase
  const handlePurchase = () => {
    localStorage.removeItem("addToCard");
    setAddCart([]);
    setShowModal(true);
  };
  
  const totalCost = addCart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Helmet>
        <title>Gadget Heaven/Add To Cart</title>
      </Helmet>
      {/* Header Section */}
      <div className="bg-purple-600 lg:px-16 mx-2 md:mx-auto flex justify-center items-center h-[240px] md:h-[340px]">
        <div className="text-center">
          <h1 className="text-xl lg:text-4xl text-white font-bold mt-5">
            Dashboard
          </h1>
          <p className="text-gray-200 mt-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex gap-x-4 mt-5 justify-center">
            <Link to="/cart">
              <button
                className={`py-2 px-8 border-2 border-purple-200 hover:bg-purple-300 hover:text-gray-700 text-lg font-semibold rounded-3xl ${
                  pathname === "/cart"
                    ? "bg-purple-200 text-gray-700"
                    : "bg-none text-white"
                }`}
              >
                Cart
              </button>
            </Link>
            <Link to="/wishlist">
              <button
                className={`py-2 px-4 border-2 border-purple-200 hover:bg-purple-300 hover:text-gray-700 text-lg font-semibold rounded-3xl ${
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

      {/* Cart Section */}
      <div className="flex justify-between items-center mb-4 mt-8 lg:px-16 mx-2 md:mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700">Cart</h3>
        <div className="flex gap-x-8 items-center">
          <p>
            <span className="text-lg font-semibold text-gray-700">
              Total Cost : ${totalCost}
            </span>
          </p>
          <button
            onClick={() => handleSort("asc")}
            className="py-2 px-4 border-2 border-purple-600 rounded-3xl text-lg text-purple-600 hover:bg-purple-600 hover:text-white"
          >
            Sort By Price
          </button>
          <button
            onClick={handlePurchase}
            className="py-2 px-4 border-2 border-purple-600 rounded-3xl text-lg text-purple-600 hover:bg-purple-600 hover:text-white"
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="lg:px-16 mx-2 md:mx-auto">
        {addCart.length > 0 ? (
          addCart.map(({ title, img, description, price, product_id }) => (
            <div
              key={product_id}
              className="bg-purple-200 border-2 border-purple-600 rounded-lg p-3 flex justify-between items-center mb-3"
            >
              <div className="flex items-center gap-x-2">
                <img className="w-24 h-20 rounded-md" src={img} alt={title} />
                <div>
                  <h2 className="text-xl font-semibold text-gray-600 mb-1">
                    {title}
                  </h2>
                  <p className="text-gray-500 mb-1">{description}</p>
                  <p className="text-gray-600">Price: ${price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(product_id)}
                aria-label={`Remove ${title} from cart`}
              >
                <MdDeleteForever className="text-3xl text-red-500" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-red-500 text-center">
            No products added to the cart yet!
          </p>
        )}
      </div>
      {/* Modal Section */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src={modalImg}
                alt="Purchase Successful"
                className="w-20 h-20"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              Purchase Successful!
            </h2>
            <p className="text-gray-600">Thank you for your purchase.</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
