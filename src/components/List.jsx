import React from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";

List.propTypes = {
  list: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

function List(props) {
  const {list, onRemoveItem} = props;

  return (
    <div className="list">
      <div className="header">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено</span>
        <span>Действия</span>
      </div>
      <div className="items">
        {list.map(o => <Item key={o.id} item={o} onRemove={onRemoveItem}></Item>)}
      </div>
    </div>
  );
}

export default List;