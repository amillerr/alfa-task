import React, {useEffect, useState} from 'react';
import CardItem from "../CardItem/CardItem";
import './CardList.css'
import {useDispatch, useSelector} from "react-redux";
import {filterItem, getData} from "../../redux/actions/actionImage";


const CardList = () => {
  const [cardsCount, setCardsCount] = useState(3);
  const [filterItems, setFilterItems] = useState("");

  const dispatch = useDispatch();
  const loadData = useSelector((state) => state.loadData.loadData)

  useEffect(() => {
    dispatch(getData())
  },[dispatch]);

  const likeItem = (filterItems) => {
    setFilterItems(!filterItems)
    dispatch(filterItem)
  }

  const changeCardsCount = () => {
    setCardsCount(cardsCount + 3)
  };

  return <section className="list">

      <h1 className="list__title">Adaptive cards list</h1>
      <button className="list__filter-btn" onMouseUp={() => likeItem(filterItems)}>
        {filterItems
          ? 'Показать все посты'
          : 'Показать посты с лайками'}
      </button>
    <ul className="list__items">
      {loadData.length
        ? (filterItems === true ? loadData
            .filter(i => i.like === true)
          : loadData)
          .slice(0, cardsCount).map(i =>
            <CardItem
              key={i.id}
              title={i.title}
              url={i.url}
              id={i.id}
              like={i.like}
            />
          )
        : <p> Данные отсутствуют</p>
      }
    </ul>
    {loadData.length >= cardsCount &&
      <button className="list__button" onClick={changeCardsCount} >Показать еще</button>}
  </section>;
};

export default CardList;