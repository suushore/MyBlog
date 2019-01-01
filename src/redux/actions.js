export const actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

export function failure (error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

export function increment () {
  return {type: actionTypes.INCREMENT};
}

export function decrement () {
  return {type: actionTypes.DECREMENT};
}

export function reset () {
  return {type: actionTypes.RESET};
}

export function loadData () {
  return {type: actionTypes.LOAD_DATA};
}
