import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          FindIt
        </Link>

        <div className="flex flex-wrap gap-4 items-center">

          <Link to="/">
            Home
          </Link>

          <Link to="/items">
            Items
          </Link>

          {user && (
            <>
              <Link to="/create">
                Create Post
              </Link>

              <Link to="/myposts">
                My Posts
              </Link>

              <Link to="/dashboard">
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          )}

          {!user && (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-white text-black px-3 py-1 rounded"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;