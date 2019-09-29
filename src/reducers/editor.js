import { RUN, RUNNING,  RETRY, SUCCESS } from '../actions';

export const initialEditorState = {
  executed: false,
  executing: false
};

const editorReducer = (state, action) => {
  switch (action.type) {
    case RUN:
      return {
        ...state,
        executed: true
      };
    
    case RUNNING:
      return {
        ...state,
        executing: true
      }

    case RETRY:
      return {
        ...state,
        executed: false,
        executing: false
      }

    case SUCCESS:
      return {
        ...state,
        executed: false,
        executing: false
      };

    default:
      return state;
  }
}

export default editorReducer