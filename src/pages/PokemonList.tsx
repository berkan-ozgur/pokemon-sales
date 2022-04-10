import { AxiosResponse } from "axios";
import { Card } from "primereact/card";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { PokeListResponse } from "../models/responses/PokeListResponse.interface";
import { getPokeList } from "../services/PokeService.service";
import Pokeball from "../assests/Pokeball-Welcomer.png"

const PokemonList = () => {

    const [pokeList, setPokeList] = useState<PokeListResponse[]>([])
    const headerCard = (
        <img alt="Card" src={Pokeball} className="w-5 mt-5"></img>
    )

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
                        <Card title={`${pokemon.name}`} style={{ width: '11em', textTransform: 'capitalize', textAlign: "center", color: "black" }}
                            key={index} className="PokemonNameCards" header={headerCard}>
                            <Link to={`/pokemon-list/poke-details/${index + 1}`}>
                                <b className="m-2" style={{ color: "blue", fontSize: 15 }}>More Details →</b>
                            </Link>
                        </Card>


                    )
                })
            }

        </Layout >
    )
}

export default PokemonList;