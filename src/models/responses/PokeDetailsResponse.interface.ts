export interface PokeDetailsResponse {
    name:string;
    sprites: {
        back_shiny: string;
        front_shiny: string;
    }
    types: {
        type: {
            name: string;
        }
    }[];
};