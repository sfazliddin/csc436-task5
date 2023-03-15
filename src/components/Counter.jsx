import { useReducer } from 'react';

const initialState = {
  count: 0,
  numberToChangeBy: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + state.numberToChangeBy,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - state.numberToChangeBy,
      };
    case 'updateNumberToChangeBy':
      return {
        ...state,
        numberToChangeBy: parseInt(action.payload, 10),
      };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div >
      <pre className="rainbow box text-center">Value {state.count}</pre>
      <div className="flex gap center">
        <button
          className="button-box"
          onClick={() => dispatch({ type: 'increment' })}
        >
          <span className="huge">+</span>Increment by {state.numberToChangeBy}
        </button>
        <button
          className="button-box"
          onClick={() => dispatch({ type: 'decrement' })}
        >
          <span className="huge">-</span>Decrement by {state.numberToChangeBy}
        </button>
      </div>
      <p className="flex gap center">
        <label className="button-box" htmlFor="number">
          Number to Increment/Decrement by{' '}
        </label>
        <input
          className="input-box"
          onChange={(e) =>
            dispatch({
              type: 'updateNumberToChangeBy',
              payload: e.target.value,
            })
          }
          type="number"
          value={state.numberToChangeBy}
          name="number"
          id="number"
        />
      </p>
    </div>
  );
};

export default Counter;