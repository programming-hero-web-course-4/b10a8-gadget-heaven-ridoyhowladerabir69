// import React, { createContext, useEffect, useState } from "react";
// import { addToStoredAddToCard, addToStoredWishlist, getStoredAddToCard, getStoredWishlist } from "../LocalStorege/stored";

// export const dataContext = createContext([]);

// const DataProvider = ({ children }) => {
//   const [allProductData, setAllProductData] = useState([]);
//   const [addCart, setAddCart] = useState([]);
//   const [sort, setSort] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [addToWishlist, setAddToWishlist] = useState([]);
  

//   useEffect(() => {
//     fetch("/allData.json")
//       .then((res) => res.json())
//       .then((data) => setAllProductData(data));
//   }, []);

//   useEffect(() => {
//     if (allProductData.length > 0) {
//       const storedAddToCart = getStoredAddToCard() || [];
//       const storedAddCartInt = storedAddToCart.map((id) => parseInt(id));
//       const addToCart = allProductData.filter((product) =>
//         storedAddCartInt.includes(product.product_id)
//       );
//       setAddCart(addToCart);
//     }
//   }, [allProductData]);

//    // Add to cart function
//    const handleCart = (id) => {
//     // Add to localStorage
//     addToStoredAddToCard(id);

//     // Add to cart state
//     const productToAdd = allProductData.find(product => product.product_id === id);
//     if (productToAdd) {
//       setAddCart((allProductData) => [...allProductData, productToAdd]);
//     }
//   };


//   // Remove item from cart
//   const handleRemove = (id) => {
//     const updatedCart = addCart.filter((product) => product.product_id !== id);
//     setAddCart(updatedCart);
//     localStorage.setItem(
//       "addToCard",
//       JSON.stringify(updatedCart.map((product) => product.product_id))
//     );
//   };

//   // Total cost price
//   const totalCost = addCart.reduce((sum, item) => sum + item.price, 0);

//   // Sort Price
//   const handleSort = (sortType) => {
//     setSort(sortType);
//     if (sortType === "asc") {
//       const sortAsc = [...addCart].sort((a, b) => a.price - b.price);
//       setAddCart(sortAsc);
//     }
//   };

//   // Purchase button handler and show modal
//   const handlePurchase = () => {
//     localStorage.removeItem("addToCard");
//     setAddCart([]);
//     setShowModal(true);
//   };

// //   Wish List
// useEffect(() => {
//     if(allProductData.length > 0) {
//         const storedAddToWishlist = getStoredWishlist() || [];
//         const storedAddWishlistInt = storedAddToWishlist.map((id) => parseInt(id));
//         const addWishlist = allProductData.filter((product) =>
//         storedAddWishlistInt.includes(product.product_id)
//         );
//         setAddToWishlist(addWishlist);
//     }
//   }, [allProductData]);

//   const handleWishlistAdded = (id) => {
//     addToStoredWishlist(id);
//     const productToAddWishlist = allProductData.find(product => product.product_id === id);
//     if (productToAddWishlist) {
//       setAddCart((allProductData) => [...allProductData, productToAddWishlist]);
//     }
//   }

//   const handleAddWishlist = (id) => {
//     addToStoredAddToCard(id);

//     const updatedWishlist = addToWishlist.filter(
//       (product) => product.product_id !== id
//     );
//     setAddToWishlist(updatedWishlist);
//     localStorage.setItem("addToWishlist", JSON.stringify(updatedWishlist));
//   };

//   const handleRemoveWishlist = (id) => {
//     const updatedWishlist = addToWishlist.filter(
//       (product) => product.product_id !== id
//     );
//     setAddToWishlist(updatedWishlist);
//     localStorage.setItem("addToWishlist", JSON.stringify(updatedWishlist));
//   };


//   return (
//     <dataContext.Provider
//       value={{
//         addCart,
//         handleRemove,
//         totalCost,
//         handleSort,
//         handlePurchase,
//         handleCart,
//         handleWishlistAdded,
//         showModal,
//         setShowModal,
//         addToWishlist,
//         handleAddWishlist,
//         handleRemoveWishlist,
//       }}
//     >
//       {children}
//     </dataContext.Provider>
//   );
// };

// export default DataProvider;
