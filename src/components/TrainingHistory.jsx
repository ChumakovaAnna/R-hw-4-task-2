import React, { Component } from 'react';
import moment from "moment";
import Model from "../Model/ItemModel";
import Form from "./Form"
import List from "./List"

const a = new Model(moment("20.10.20", "DD.MM.YY"), "10");
const b = new Model(moment("20.01.20", "DD.MM.YY"), "1");
const arr = [a, b]

class TrainingHistory extends Component {
  constructor() {
    super();
    this.state = {trainingsList: [arr]};
    this.tr = [];
  }

  handleItemRemove = (item) => {
    // эта та строчка, которую я не понимаю. Часть -> trainingsList: prevState.trainingsList
    this.useState(prevState => ({trainingsList: prevState.trainingsList.filter(o => o.id !== item.id)}));
  }

  handleItemAdd = (obj) => {
    //не могу эту функцию написать. Хочу, чтобы она обрабатывала состояние trainingsList.
    //trainingsList - это массив с будущим списком объектов, созданных из экземпляров класса Model
    const date = obj.date._d;
    const {distance} = obj;
    const list = this.state.trainingsList;
    console.log(list)
    console.log(list[0].date)
    console.log(obj)
  }

  render() {
    return (
      <>
        <Form onHandleItemAdd={this.handleItemAdd}></Form>
        <List></List>
      </>
    );
  }
}

export default TrainingHistory;