import {nanoid} from "nanoid";

export default class ItemModel {
  constructor(date, distance) {
    this.id = nanoid();
    this.date = date;
    this.distance = distance;
  }
}