import { useEffect, useState } from "react";
import ToyCategoryTab from "./ToyCategoryTab";

const ToyCategories = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://play-wheels-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="my-20">
      <div className="lg:w-1/2 mx-auto text-center space-y-7">
        <h1 className="text-4xl font-bold">Shop By Categories</h1>
      </div>
      <div className="flex justify-center mt-5">
        <ToyCategoryTab toys={toys}></ToyCategoryTab>
      </div>
    </div>
  );
};

export default ToyCategories;
