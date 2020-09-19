import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";

Form.propTypes = {
  onHandleItemAdd: PropTypes.func.isRequired
};

function Form(props) {
  const {onHandleItemAdd} = props;

  let newItem = {};

  const onValueAdd = (evt) => {
    
    if (evt.target.name === "date") {
      const value = evt.target.value;
      const date = moment(value, "DD.MM.YY");
      if (!date._isValid || value.length < 8) {
        return console.log("Некорректная дата!");
      }
      newItem.date = date;
    }
    
    if (evt.target.name === "distance") {
      const value = parseInt(evt.target.value);
      if (!isNaN(value)) {
        newItem.distance = Number(evt.target.value);
      } else {
        console.log("Некорректное число!");
      }
    }
  }

  const onItemAdd = () => {
    if (Object.keys(newItem).length === 2) {
      onHandleItemAdd(newItem);
    } else {
      console.log("Не все поля заполнены");
    }
    const formDate = document.getElementById("date");
    formDate.value = "";
    const formDistance = document.getElementById("distance");
    formDistance.value = "";
    newItem = {};
  }

  return (
    <form className="form" onClick={evt => evt.preventDefault()}>
      <div>
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input id="date" name="date" onChange={onValueAdd}></input>
      </div>
      <div>
        <label htmlFor="distance">Пройдено км</label>
        <input id="distance" name="distance" onChange={onValueAdd}></input>
      </div>
      <button className="button_form" type="submit" onClick={onItemAdd}>OK</button>
    </form>
  );
}

export default Form;