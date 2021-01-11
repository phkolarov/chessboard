import axios from "axios";
import service_discovery from "./service_discovery";

const gameService = axios.create({
    baseURL: service_discovery.game_service_url,
    headers: {
        "Content-Type": "application/json"
    }
});

export {gameService}