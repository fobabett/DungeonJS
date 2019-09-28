/*
 * evaluate code
 * queue dispatches
 * dispatch in 500ms intervals
 */
import { ATTACK, MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from '../actions/hero'


const no = {}

const run = (code, dispatch) => {

  ((document, window, global, console, $, ga, jQuery,  XMLHttpRequest, Function, Object) => {
    const attack = () => dispatch({ type: ATTACK })
    const moveUp = () => dispatch({ type: MOVE_UP })
    const moveDown = () => dispatch({ type: MOVE_DOWN })
    const moveLeft = () => dispatch({ type: MOVE_LEFT })
    const moveRight = () => dispatch({ type: MOVE_RIGHT })

    eval(code)

  })(no, no, no, no, no, no, no, no, no, no)
}

export default run
