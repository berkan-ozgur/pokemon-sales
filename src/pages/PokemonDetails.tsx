import { AxiosResponse } from "axios"
import { Card } from "primereact/card"
import React from "react"
import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
import { PokeDetailsResponse } from "../models/responses/PokeDetailsResponse.interface"
import { getPokeDetails } from "../services/PokeService.service"

const PokemonDetails = () => {
    const { id } = useParams()
    const [pokeDetails, setPokeDetails] = React.useState<PokeDetailsResponse | null>(null);

    React.useEffect(() => {
        getPokeDetails(+id!).then((response: AxiosResponse) => {
            setPokeDetails(response.data as PokeDetailsResponse)
        })
    }, [id])

    return (
        <Layout>
            <Card title={`${pokeDetails?.name}`} style={{
                width: '25em', textTransform: 'capitalize',
                marginTop: '5rem', marginLeft: '47rem', position: 'flex'
            }}>
                <img alt="" src={`${pokeDetails?.sprites.back_shiny}`} style={{ height: '10rem' }}></img>
                <img alt="" src={`${pokeDetails?.sprites.front_shiny}`} style={{ height: '10rem' }}></img>
                {
                    <div>
                        <h2>Types</h2> <hr />
                        {pokeDetails?.types.map((poke) => (
                            <p className="m-0" style={{ color: "red" }}>
                                {poke.type.name}
                            </p>
                        ))}
                    </div>
                }


            </Card>
        </Layout >
    )
}

export default PokemonDetails