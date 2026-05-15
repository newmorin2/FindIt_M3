import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";

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

// GET SINGLE ITEM
export const getItemById = async (id) => {
  const docRef = doc(db, "items", id);

  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }

  return null;
};

export const deleteItem = async (id) => {
  const docRef = doc(db, "items", id);

  await deleteDoc(docRef);
};
