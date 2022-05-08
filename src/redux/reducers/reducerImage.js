import uuid from 'react-uuid';
import { initialState } from "../initialState";
import {DELETE_ITEM, FILTER_ITEMS, GET_DATA, LIKE_ITEM} from "../types/typesImage";

export const reducerImage = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        loadData: action.payload.map(i => {
          return {
            ...i,
            id: uuid(),
            like: false,
          }
        })
      }
    case DELETE_ITEM:
      return {
        ...state,
        loadData: state.loadData.filter(i => {
          return i.id !== action.id
        })
      }
    case LIKE_ITEM:
      return {
        ...state,
        loadData: state.loadData.map(i => {
          if (i.id === action.like) {
            return {
              ...i,
              like: !i.like
            }
          }
          return i
        })
      }
    case FILTER_ITEMS:
      return {
        ...state
      }
    default:
      return state
  }
};