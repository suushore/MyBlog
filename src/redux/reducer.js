import { actionTypes } from './actions';

export const exampleInitialState = {
  count: 0,
};

function reducer (state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{error: action.error}
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{count: state.count + 1}
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{count: state.count - 1}
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{count: exampleInitialState.count}
      };

    default:
      return state;
  }
}

export default reducer;
