import React from 'react';
import PropTypes from 'prop-types';
import mark from "../img/delete.png";

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

function Item(props) {
  const {item, onRemoveItem} = props;

  const date = () => {
    const dateObj = item.date.toObject();
    const month = dateObj.months + 1;
    return `${dateObj.date < 10 ? "0" + dateObj.date : dateObj.date}.${month < 10 ? "0" + month : month}.${dateObj.years}`;
  }

  return (
    <div className="item">
      <div className="data_item">{date()}</div>
      <div className="distance_item">{item.distance}</div>
      <button className="button_item" onClick={onRemoveItem}>
        <img src={mark} alt="удалить"></img>
      </button>
    </div>
  );
}

export default Item;