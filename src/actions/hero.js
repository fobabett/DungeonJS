import { ATTACK, MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from './'

export const attack = () => ({ type: ATTACK })

export const moveUp = () => ({ type: MOVE_UP })

export const moveDown = () => ({ type: MOVE_DOWN })

export const moveLeft = () => ({ type: MOVE_LEFT })

export const moveRight = () => ({ type: MOVE_RIGHT })
