import { PokeDetailsResponse } from "../models/responses/PokeDetailsResponse.interface";
import { POKEDETAILS } from "./Constants";

export const pokeDetails = (data: PokeDetailsResponse[]) => ({
    type: POKEDETAILS,
    payload: data,
}as const);