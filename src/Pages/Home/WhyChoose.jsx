const WhyChoose = () => {
  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold text-center">Why Should Choose Us</h2>
      <div className="container mx-auto lg:px-32 lg:flex justify-center gap-32 items-center">
        <div className="mt-14">
          <div className="card w-96 bg-slate-50-50 border-t-4 border-yellow-500  rounded-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold mb-4">
                Fast Delivery
              </h2>
              <p className="text-lg">
                Enjoy swift and efficient delivery, ensuring your products reach
                your doorstep in record time
              </p>
            </div>
          </div>
          <div className="card w-96 bg-slate-50-50 border-t-4 border-yellow-500  rounded-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold mb-4">
                Online Support
              </h2>
              <p className="text-lg">
                Experience the convenience of our online support, providing
                timely assistance and guidance .
              </p>
            </div>
          </div>
          <div className="card w-96 bg-slate-50-50 border-t-4 border-yellow-500  rounded-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold mb-4">
                Free Return
              </h2>
              <p className="text-lg">
                Shop with confidence knowing that we offer hassle-free returns,
                providing you with the freedom to return
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/gvc4yHN/car-hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
