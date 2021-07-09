import {INCREMENT,DECREMENT} from '../constant'

const initState = {sum:0};
export default function countReducer(preState=initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return {sum:preState.sum + data}
    case DECREMENT:
      return {sum:preState.sum - data}
    default:
      return {sum:preState.sum}
  }
}
