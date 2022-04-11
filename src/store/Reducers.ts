import { PokeDetailsResponse } from "../models/responses/PokeDetailsResponse.interface";
import { pokeDetails } from "./Actions";
import { POKEDETAILS } from "./Constants";

type Actions = ReturnType<typeof pokeDetails>;

export const pokeDetailsReducer = (state = {} as PokeDetailsResponse, action: Actions) => {
    switch (action.type) {
        case POKEDETAILS: {
            return action.payload // burayla alakalı bir sıkıntı var ama çözemedim :(
        }
        default:
            return state;
    }
}