import React from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";

List.propTypes = {
  
};

function List(props) {
  return (
    <div className="list">
      <div className="header">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено</span>
        <span>Действия</span>
      </div>
      <div className="items">
        <Item></Item>
      </div>
    </div>
  );
}

export default List;