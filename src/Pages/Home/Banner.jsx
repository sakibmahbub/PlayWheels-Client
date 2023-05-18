const Banner = () => {
  return (
    <div
      className="hero min-h-screen rounded-lg"
      style={{
        backgroundImage: `url("https://i.ibb.co/Pz8tVZd/main-banner2.png")`,
      }}
    >
      <div className="hero-content text-left text-neutral-content">
        <div className="ml-5">
          <img
            src="https://i.ibb.co/1dKFr4F/img1-removebg-preview.png"
            alt="big sale"
            className="mb-2"
          />
          <h1 className="mb-6 text-6xl font-bold">
            Where Fun <br /> Takes the Wheel!
          </h1>
          <p
            className="mb-6 w-2/5
          "
          >
            Welcome to the ultimate destination for car toy enthusiasts! Explore
            a thrilling world where your imagination takes the driver's seat.
            Discover an impressive collection of meticulously crafted car toys.
          </p>
          <button className="btn btn-outline text-white hover:bg-yellow-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
