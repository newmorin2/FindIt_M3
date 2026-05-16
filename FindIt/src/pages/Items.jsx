import { useEffect, useState } from "react";
import { getItems } from "../services/itemsService";
import { Link } from "react-router-dom";

function Items() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems();
      setItems(data);
    };
    const filteredItems = items.filter(item => {
    const matchesSearch =
    item.title.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
    filter === "all" || item.type === filter;

     return matchesSearch && matchesFilter;
    });

    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        Lost & Found Items
      </h1>
    <div className="flex flex-col md:flex-row gap-4 mb-6">
  <input
    type="text"
    placeholder="Search items..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border p-3 rounded w-full"
  />

  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="border p-3 rounded"
    >
        <option value="all">All</option>
     <option value="lost">Lost</option>
     <option value="found">Found</option>
     </select>
    </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => (
          <Link
            to={`/items/${item.id}`}
            key={item.id}
            className="bg-white p-4 rounded shadow block hover:shadow-lg transition"
            >
            <h2 className="text-xl font-bold">
              {item.title}
            </h2>

            <p className="text-gray-600">
              {item.description}
            </p>

            <p className="mt-2">
              <strong>Type:</strong> {item.type}
            </p>

            <p>
              <strong>Location:</strong> {item.location}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Posted by: {item.userEmail}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Items;