import React, {lazy} from "react";

const Game = lazy(() => import("../../components/game/Game"));

/**
 *
 * @param data
 * @returns {*}
 */
export const route_mapper = (data) => {
    return data.map((e, i) => {
        return {
            name: `${++i}. ${e.white} vs ${e.black}`,
            path: `/game-${i}`,
            component: <Game gameid={--i}/>
        }
    })
}