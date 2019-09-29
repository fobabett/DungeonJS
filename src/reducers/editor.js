import { RUN, RUNNING, RETRY, SUCCESS, CONSOLE_LOG } from '../actions';

export const initialEditorState = {
  executed: false,
  executing: false,
  code: null
};

const editorReducer = (state, action) => {
  switch (action.type) {
    case RUN:
      return {
        ...state,
        executed: true,
      };

    case RUNNING:
      return {
        ...state,
        executing: true,
        code: action.code
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