import React, { useState } from "react";
import banner from "../../assets/banner.jpg";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import AllProduct from "./ProductBox/AllProduct";
import { Helmet } from "react-helmet";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Product");

  // Category buttons
  const categories = [
    "All Product",
    "Laptop",
    "Phone",
    "Accessories",
    "Smart Watch",
    "MacBook",
    "Iphone",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Helmet>
        <title>Gadget Heaven/Home</title>
      </Helmet>
      <div
        className="bg-purple-600 lg:px-16 mx-2 md:mx-auto
        flex justify-center rounded-b-xl h-[380px] md:h-[520px]"
      >
        <div className="text-center mt-2 lg:w-[900px]">
          <h1 className="text-xl lg:text-5xl text-white font-semibold lg:leading-snug">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-base text-white mt-3">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="mt-8">
            <button className="btn bg-white rounded-3xl text-xl text-purple-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="border-2 bg-white bg-opacity-40 rounded-xl p-4 w-[900px] mx-auto z-40 -mt-52">
        <img src={banner} alt="" className="w-[1000px] h-[440px] rounded-lg" />
      </div>
      {/* Category and card section */}
      <div>
        <h2 className="text-4xl font-semibold text-center mt-16">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="grid md:grid-cols-4 gap-x-8 mt-8">
          {/* Category Container */}
          <div className="md:col-span-1 p-2 justify-center">
            <button
              onClick={() => setOpen(!open)}
              className={`py-2 px-4 text-lg text-white font-semibold rounded-md w-full hover:bg-purple-800 hover:shadow-xl flex justify-center items-center ${
                open === true ? "bg-purple-800" : "bg-purple-600"
              }`}
            >
              Category
              {open === true ? (
                <IoMdArrowDropdown className="text-4xl" />
              ) : (
                <IoMdArrowDropleft className="text-4xl" />
              )}
            </button>
            <div
              className={`flex justify-center flex-col gap-y-5 mt-3 mb-2 relative duration-1000 ${
                open ? "left-0" : "-left-96"
              }`}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`border-2 border-purple-800 py-2 px-4 rounded-lg text-lg ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "hover:bg-purple-600 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {/* Card Container */}
          <div className="col-span-3 border p-4 rounded-lg">
            <AllProduct selectedCategory={selectedCategory}></AllProduct>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
