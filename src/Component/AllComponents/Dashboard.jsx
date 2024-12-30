import { Helmet } from "react-helmet";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const {pathname} = useLocation();

  return (
    <div>
      <Helmet>
        <title>Gadget Heaven/Dashboard</title>
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
      <div className="">
        {/* Add to card */}{/* Wishlist */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
