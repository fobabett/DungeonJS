import { RUN, RUNNING, RETRY, SUCCESS, CONSOLE_LOG, RESET } from '../actions';

export const initialEditorState = {
  executed: false,
  executing: false,
  success: false,
  error: null, // @TODO display this
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

    case ERROR:
      return {
        ...state,
        error: action.error
      }

    case RETRY:
      return {
        ...state,
        error: action.error,
        executed: false,
        executing: false
      }

    case SUCCESS:
      return {
        ...state,
        success: true,
        executed: false,
        executing: false
      };

    case RESET:
      return {
        executed: false,
        success: false,
        executing: false
      }

    default:
      return state;
  }
}

export default editorReducer
