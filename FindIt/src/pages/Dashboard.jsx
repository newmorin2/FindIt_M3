import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
   const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">
        Dashboard
      </h1>

      <p className="mb-6">
        Welcome {user?.email}
      </p>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;