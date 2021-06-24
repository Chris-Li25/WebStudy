const initState = 0;
export default function countReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case "increment":
        console.log(preState + data)
      return preState + data;
    case "decrement":
      return preState - data;
    default:
      return preState;
  }
}
