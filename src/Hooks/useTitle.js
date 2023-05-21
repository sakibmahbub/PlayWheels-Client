import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `PlayWheels | ${title}`;
  }, [title]);
};

export default useTitle;
