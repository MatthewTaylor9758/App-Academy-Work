// TODO: Import the `RECEIVE_GIFS` constant
import { RECEIVE_GIFS } from '../actions/gifActions';

const gifsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_GIFS:
      return action.gifs;
    default:
      return state;
  }
}

export default gifsReducer;
// TODO: Return the GIFs from the action object if the action type is `RECEIVE_GIFS`
// TODO: Return the previous state by default
