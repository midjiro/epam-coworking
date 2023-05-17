import {
  doc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
import { DB } from "../config.js";

class Place {
  constructor(id, owner, number, type, date) {
    this.id = id;
    this.owner = owner;
    this.number = number;
    this.type = type;
    this.date = date;
  }

  static fromForm(form) {
    const formDataMap = new FormData(form);
    const place = new Place();

    for (let entry of formDataMap.entries()) {
      if (entry[0] === "date") {
        place[entry[0]] = new Date(entry[1]);
        continue;
      }
      place[entry[0]] = entry[1];
    }

    return place;
  }

  static fromFirebaseObject(doc) {
    const place = new Place(
      doc.id,
      doc.owner,
      doc.number,
      doc.type,
      doc.date.toDate()
    );

    return place;
  }

  getTypeRef(coworkingTypesCollectionName) {
    const ref = doc(DB, coworkingTypesCollectionName, this.type);

    return ref;
  }

  toFirebaseObject() {
    const coworkingTypeRef = this.getTypeRef("coworkingTypes");
    let place = {
      ...this,
      type: coworkingTypeRef,
      date: Timestamp.fromDate(this.date),
    };
    if (!place.id) delete place.id;
    if (!place.owner) delete place.owner;

    return place;
  }

  same(place) {
    const firebaseObject = this.toFirebaseObject();
    if (
      firebaseObject.number == place.number &&
      firebaseObject.type.id == place.type.id &&
      firebaseObject.date.isEqual(place.date)
    )
      return true;

    return false;
  }
}

export default Place;
