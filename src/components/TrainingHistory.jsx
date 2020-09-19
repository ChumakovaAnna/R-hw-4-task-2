import React, { Component } from 'react';
import moment from "moment";
import Model from "../Model/ItemModel";
import Form from "./Form"
import List from "./List"

class TrainingHistory extends Component {
  constructor() {
    super();
    this.state = {trainingsList: []};
  }

  handleItemRemove = (item) => {
    // this.setState(prevState => {prevState.trainingsList.filter(o => o.id !== item.id)});//не убирается объект
    this.state.trainingsList = this.remove(this.state.trainingsList, item); //и почему это работает только вместе с 16 строчкой.
    this.setState(this.remove(this.state.trainingsList, item));
  }

  remove = (list, item) => {
    const newList = list.filter(o => o.id !== item.id);
    return newList;
  }

  
  handleItemAdd = (obj) => {
    this.setState([...this.checkedItemsByDate(this.state.trainingsList, obj)]);
    this.setState(prevState => {prevState.trainingsList.sort((a, b) => (b.date - a.date))});
  }

  checkedItemsByDate = (list, obj) => {
    const oldItem = list.find(item => {
      if (item.date.isSame(obj.date)) {
        return item;
      }
    });
    if (oldItem) {
      oldItem.distance += obj.distance;
      return list;
    }
    const newItem = new Model(obj.date, obj.distance);
    list.push(newItem);
    return list;
  }

  render() {
    return (
      <>
        <Form onHandleItemAdd={this.handleItemAdd}></Form>
        <List list={this.state.trainingsList} onRemoveItem={this.handleItemRemove}></List>
      </>
    );
  }
}

export default TrainingHistory;