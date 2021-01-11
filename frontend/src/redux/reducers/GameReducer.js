import routeTypes from "../types/Game.types";

const INITIAL_STATE = {
    data: []
}

/**
 *
 * @param state
 * @param action
 * @returns {{game_data}|{game_data: []}}
 * @constructor
 */
const GameReducer = (state = INITIAL_STATE, action) => {

    // The right way to implement game is to move all actions in the reducer... but i don't have enough time to do that.. sorry about that.
    switch (action.type) {
        case routeTypes.OBTAIN_GAME_DATA:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default GameReducer;