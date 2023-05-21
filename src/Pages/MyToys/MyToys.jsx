import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    if (user) {
      const url = `http://localhost:5000/toys`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => setMyToys(data))
        .catch((error) => console.error("Error retrieving toys:", error));
    }
  }, [user]);

  return <div></div>;
};

export default MyToys;
