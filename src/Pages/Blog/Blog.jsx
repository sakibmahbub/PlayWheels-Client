const Blog = () => {
  return (
    <div className="my-20">
      <div className="card w-1/2 mx-auto bg-base-100 shadow-lg my-10">
        <div className="card-body">
          <h2 className="card-title">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p>
            -- Access token is a unique code which proves user's identity and
            shows what the users are allowed to do. Access tokens have
            expiration time and they do not last long.
          </p>
        </div>
      </div>
      <div className="card w-1/2 mx-auto bg-base-100 shadow-lg my-10">
        <div className="card-body">
          <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
          <p>
            -- In SQL databases everything is organised in tables where the data
            is stored. Mainly they have specific structure rules of how the data
            should be organize. On the other hand NoSQL databases are flexible
            and handles various types of data
          </p>
        </div>
      </div>
      <div className="card w-1/2 mx-auto bg-base-100 shadow-lg my-10">
        <div className="card-body">
          <h2 className="card-title">What is express js? What is Nest JS?</h2>
          <p>
            -- Express Jss is a simple and flexible tool that allows us to
            handle requests and responses from web browsers.Nest Js is a
            framework which is built on top of Express.js. It mainly add more
            features for express js
          </p>
        </div>
      </div>
      <div className="card w-1/2 mx-auto bg-base-100 shadow-lg my-10">
        <div className="card-body">
          <h2 className="card-title">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p>
            -- MongoDB aggregate feature helps us to analyze and transform data
            without downloading it completely. By using some operations like
            filtering and grouping to get the desired results with more
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
