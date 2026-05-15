import { useEffect, useState } from "react";
import { getItems } from "../services/itemsService";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems();
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        Lost & Found Items
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow"
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;