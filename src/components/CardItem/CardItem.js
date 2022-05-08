import React, {useRef} from 'react';
import './CardItem.css'
import {useDispatch} from "react-redux";
import {deleteItem, likeItem} from "../../redux/actions/actionImage";

const CardItem = ({ url, title, id, like }) => {

  const dispatch = useDispatch();

  const likeImage = useRef();

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id))
  };

  const handleLikeItem = (id) => {
    dispatch(likeItem(id))
  }

  return (
    <li className='item'>
      <button
        className="item__delete-btn"
        onClick={() => handleDeleteItem(id)}
        type="button"
        aria-label="Удалить"
      ></button>
      <img className='item__img' src={url} alt=""/>
      <div className="item__container">
        <h2 className="item__title">{title}</h2>
        <button
          ref={likeImage}
          className={like ? 'item__like-btn-active' : 'item__like-btn'}
          onClick={() => handleLikeItem(id)}
          type="button"
          aria-label="Нравиться"
        />
      </div>
    </li>
  );
};

export default CardItem;