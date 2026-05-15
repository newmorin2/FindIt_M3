import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";

const itemsRef = collection(db, "items");

// CREATE ITEM
export const createItem = async (data) => {
  return await addDoc(itemsRef, {
    ...data,
    createdAt: serverTimestamp()
  });
};

// GET ALL ITEMS
export const getItems = async () => {
  const q = query(itemsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};