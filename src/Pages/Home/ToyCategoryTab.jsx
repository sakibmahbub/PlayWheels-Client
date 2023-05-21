import { useContext } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";

import { AuthContext } from "../../Providers/AuthProvider";

const ToyCategoryTab = ({ toys }) => {
  const { user } = useContext(AuthContext);
  const subCategories = Array.from(
    new Set(toys.map((toy) => toy["sub_category"]))
  );

  return (
    <Tabs>
      <TabList className="flex flex-wrap mb-4">
        {subCategories.map((subCategory) => (
          <Tab
            key={subCategory}
            className={`py-2 px-4 rounded-l-lg mx-auto cursor-pointer`}
            selectedClassName="bg-gray-900 text-white border-0"
          >
            {subCategory}
          </Tab>
        ))}
      </TabList>

      {subCategories.map((subCategory) => (
        <TabPanel key={subCategory}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toys
              .filter((toy) => toy["sub_category"] === subCategory)
              .map((toy) => (
                <div
                  key={toy._id}
                  className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-center"
                >
                  <img
                    src={toy.picture}
                    alt={toy.name}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{toy.name}</h3>
                  <p className="text-gray-600 mb-2">Price: ${toy.price}</p>
                  <p className="text-gray-600 mb-2">Rating: {toy.rating}</p>
                  <Link to={`/toy/${toy._id}`}>
                    <button
                      className="btn btn-sm bg-gray-900 mt-2"
                      onClick={() => {
                        if (!user) {
                          Swal.fire({
                            icon: "error",
                            text: "You have to log in first to view details",
                          });
                        }
                      }}
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ToyCategoryTab;
