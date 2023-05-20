import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToyCategoryTab = ({ toys }) => {
  const subCategories = Array.from(
    new Set(toys.map((toy) => toy["sub_category"]))
  );

  return (
    <Tabs>
      <TabList className="flex mb-4">
        {subCategories.map((subCategory) => (
          <Tab
            key={subCategory}
            className={` py-2 px-4 rounded-l-lg mx-auto cursor-pointer`}
            selectedClassName="bg-gray-900 text-white border-0"
          >
            {subCategory}
          </Tab>
        ))}
      </TabList>

      {subCategories.map((subCategory) => (
        <TabPanel key={subCategory}>
          <div className="grid grid-cols-3 gap-4">
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
                    className="w-52 h-40 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{toy.name}</h3>
                  <p className="text-gray-600 mb-2">Price: ${toy.price}</p>
                  <p className="text-gray-600 mb-2">Rating: {toy.rating}</p>
                  <Link to={`/toy/${toy._id}`}>
                    <button className="btn btn-sm bg-gray-900 mt-2">
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
