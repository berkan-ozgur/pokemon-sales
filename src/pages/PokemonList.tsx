import { AxiosResponse } from "axios";
import { Card } from "primereact/card";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { PokeListResponse } from "../models/responses/PokeListResponse.interface";
import { getPokeList } from "../services/PokeService.service";

const PokemonList = () => {

    const [pokeList, setPokeList] = useState<PokeListResponse[]>([])

    React.useEffect(() => {
        getPokeList().then((response: AxiosResponse) => {
            setPokeList(response.data.results as PokeListResponse[]);
        })
    }, [])

    return (
        <Layout>
            {
                pokeList.map((pokemon, index) => {
                    return (
                        <Card title={`${pokemon.name}`} style={{ width: '11em', textTransform: 'capitalize' }}
                            key={index} className="PokemonNameCards">
                            <Link to={`/pokemon-list/poke-details/${index + 1}`}>
                                <b className="m-2" style={{ color: "blue", fontSize: 13 }}>More Details →</b>
                            </Link>
                        </Card>


                    )
                })
            }

        </Layout >
    )
}

export default PokemonList;