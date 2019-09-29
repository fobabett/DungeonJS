/*
 * evaluate code
 * queue dispatches
 * dispatch in 500ms intervals
 */
import { ATTACK, MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from '../actions/hero'
import { RUN } from '../actions'

const no = {}

const run = (code, dispatch, props) => {
  ((document, window, global, console, $, ga, jQuery,  XMLHttpRequest, Function, Object) => {
    dispatch({ type: RUN })
    const attack = () => dispatch({ type: ATTACK, ...props })
    const moveUp = () => dispatch({ type: MOVE_UP, ...props })
    const moveDown = () => dispatch({ type: MOVE_DOWN, ...props })
    const moveLeft = () => dispatch({ type: MOVE_LEFT, ...props })
    const moveRight = () => dispatch({ type: MOVE_RIGHT, ...props })

    try {
      eval(code)
    } catch (err) {
    }

  })(no, no, no, no, no, no, no, no, no, no)

}

export default run
