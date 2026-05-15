import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getItemById } from "../services/itemsService";

function ItemDetails() {
  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await getItemById(id);
      setItem(data);
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8">

        <span className="inline-block bg-black text-white px-3 py-1 rounded mb-4">
          {item.type}
        </span>

        <h1 className="text-4xl font-bold mb-4">
          {item.title}
        </h1>

        <p className="text-gray-700 mb-6">
          {item.description}
        </p>

        <div className="space-y-3">
          <p>
            <strong>Location:</strong> {item.location}
          </p>

          <p>
            <strong>Posted by:</strong> {item.userEmail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;