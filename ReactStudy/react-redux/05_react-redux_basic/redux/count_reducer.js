import {INCREMENT,DECREMENT} from './constant'

// const initState = 0;
export default function countReducer(preState={count:0}, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return {count:preState.count + data}
    case DECREMENT:
      return {count:preState.count - data}
    default:
      return {count:preState.count}
  }
}
