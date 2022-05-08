import {DELETE_ITEM, FILTER_ITEMS, GET_DATA, LIKE_ITEM} from "../types/typesImage";
import axios from 'axios'

export const setData = (items) => {
  return {
    type: GET_DATA,
    payload: items
  }
};

export const filterItem = () => {
  return {
    type: FILTER_ITEMS
  }
};

export const deleteItem = (itemId) => {
  return {
    type: DELETE_ITEM,
    id: itemId
  }
};

export const likeItem = (item) => {
  return {
    type: LIKE_ITEM,
    like: item
  }
};

export const getData = () => async (dispatch) => {
  const loadData = await axios.get('https://jsonplaceholder.typicode.com/photos')
  dispatch(setData(loadData.data))
}



