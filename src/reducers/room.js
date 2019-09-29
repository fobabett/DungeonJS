import { TILES_GENERATED } from "../actions";

export const initialRoomState = {
  tiles: null
};

const roomReducer = (state, { type, tiles }) => {
  switch (type) {
    case TILES_GENERATED:
      return {
        tiles
      }

    default:
      return state;
  }
}

export default roomReducer