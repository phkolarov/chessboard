import routeTypes from "../types/Route.types";
import {route_mapper} from '../data_mappers/route_mapper'
const INITIAL_STATE = {
    data: []
}


const RouteReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case routeTypes.BUILD_ROUTES:
            return {
                ...state,
                data: route_mapper(action.payload)
            }
        default:
            return state;
    }
}

export default RouteReducer;