import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">
        Dashboard
      </h1>

      <p className="mb-6">
        Welcome {user?.email}
      </p>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;