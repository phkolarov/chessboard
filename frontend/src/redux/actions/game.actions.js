import {GetGameData} from "../../axios/game.requests";
import gameTypes from "../types/Game.types";
import routeTypes from "../types/Route.types";

/**
 *
 * @returns {function(*): Promise<AxiosResponse<*> | void>}
 */
export const initializeApplicationData = () => async dispatch => {
    return GetGameData()
        .then((response) => {
            dispatch({
                type: gameTypes.OBTAIN_GAME_DATA,
                payload: response.data
            });
            return response;
        }).then((response) => {
            dispatch({
                type: routeTypes.BUILD_ROUTES,
                payload: response.data
            });
            return response;
        }).catch(error => console.log(error));
};
