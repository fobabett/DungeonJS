import { RUN, RETRY, SUCCESS } from '../actions';

export const initialEditorState = {
  executed: false
};

const editorReducer = (state, action) => {
  switch (action.type) {
    case RUN:
      return {
        ...state,
        executed: true
      };

    case RETRY:
      return {
        ...state,
        executed: false
      }

    case SUCCESS:
      return {
        ...state,
        executed: false
      };

    default:
      return state;
  }
}

export default editorReducer