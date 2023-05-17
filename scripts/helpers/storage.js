import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
import { DB } from "../config.js";

class Storage {
  constructor(bookedPlacesCollectionName, coworkingTypesCollectionName) {
    this.bookedPlacesCollectionName = bookedPlacesCollectionName;
    this.coworkingTypesCollectionName = coworkingTypesCollectionName;
  }

  async isBookedPlace(place) {
    let bookedPlaces = await this.getAll(this.bookedPlacesCollectionName);
    if (!bookedPlaces) return false;

    for (let bookedPlace of bookedPlaces) {
      if (!place.same(bookedPlace)) continue;

      return true;
    }

    return false;
  }

  async book(place) {
    const storageCollection = collection(DB, this.bookedPlacesCollectionName);
    const isAlreadyBooked = await this.isBookedPlace(place);

    if (isAlreadyBooked)
      throw Error(`Place № ${place.number} is already booked.`);

    place = place.toFirebaseObject();
    await setDoc(doc(storageCollection), place);
  }

  async unbook(id, owner) {
    if (!id || !owner) throw Error("Id and owner both must be set.");

    const storageCollection = collection(DB, this.bookedPlacesCollectionName);
    const docRef = doc(storageCollection, id);

    const response = await getDoc(docRef);

    if (!response.exists()) throw Error("No place booked by given user found.");

    await deleteDoc(docRef);
  }

  async getAll(collectionName) {
    const storageCollection = collection(DB, collectionName);
    const response = await getDocs(storageCollection);
    if (response.empty) return null;

    const data = response.docs.map((queriedDoc) => queriedDoc.data());

    return data;
  }

  async get(...rules) {
    const storageCollection = collection(DB, this.bookedPlacesCollectionName);

    const q = query(storageCollection, ...rules);
    const response = await getDocs(q);

    if (response.empty) return null;

    const data = response.docs.map((queriedDoc) => queriedDoc.data());

    return data;
  }
}

export default Storage;
