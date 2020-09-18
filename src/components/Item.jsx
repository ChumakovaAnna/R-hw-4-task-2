import React from 'react';
import PropTypes from 'prop-types';
import Model from "../Model/ItemModel";
import mark from "../img/delete.png";

Item.propTypes = {
  
};

function Item(props) {
  const {date, distance, onRemove} = props;

  return (
    <div className="item">
      <div className="data_item">{date}</div>
      <div className="distance_item">{distance}</div>
      <button className="button_item" onClick={onRemove}>
        <img src={mark} alt="удалить"></img>
      </button>
    </div>
  );
}

export default Item;