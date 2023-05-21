import Banner from "./Banner";
import Gallery from "./Gallery";
import NewsLetter from "./NewsLetter";
import ToyCategories from "./ToyCategories";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <ToyCategories></ToyCategories>
      <WhyChoose></WhyChoose>
      <Gallery></Gallery>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
