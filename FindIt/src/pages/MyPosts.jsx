import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getItems, deleteItem } from "../services/itemsService";
import { useAuth } from "../context/AuthContext";

function MyPosts() {
  const { user } = useAuth();

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const items = await getItems();

    const filtered = items.filter(
      item => item.userId === user.uid
    );

    setPosts(filtered);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteItem(id);

    fetchPosts();
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          My Posts
        </h1>

        <Link
          to="/create"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Create Post
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-white p-4 rounded shadow"
          >
            <h2 className="text-xl font-bold mb-2">
              {post.title}
            </h2>

            <p className="text-gray-600 mb-3">
              {post.description}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPosts;