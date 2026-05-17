import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
  style={{
    backgroundImage:
      "url('/Images/hands.jpg')"
  }}>
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="max-w-2xl text-center  p-10 ">

        <h1 className="text-4xl font-bold mb-4">
          Welcome to FindIt📍
        </h1>

        <p className="text-gray-700 mb-6">
          An easy to use Lost & Found platform where users can report,
          search, and recover lost items 
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/items"
            className="bg-black text-white px-5 py-2 rounded"
          >
            Browse Items
          </Link>

          <Link
            to="/create"
            className="bg-green-500 text-white px-5 py-2 rounded"
          >
            Post Item
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;