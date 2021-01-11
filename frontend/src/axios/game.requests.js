import {gameService} from "../services";

export function getApiError(err) {
    try {
        return err;
    } catch {
        return "error";
    }
}

/**
 *
 * @returns {Promise<AxiosResponse<any>>}
 * @constructor
 */
export async function GetGameData() {

    try {
        return await gameService.get(`/games`, {});
    } catch (exc) {
        throw new Error(getApiError(exc));
    }
}
