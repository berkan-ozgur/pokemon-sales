import Layout from "../components/Layout"
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import PokeballWelcomer from "../assests/Pokeball-Welcomer.png"
const Home = () => {
    return (
        <Layout>
            <div>
                <img src={PokeballWelcomer} alt="" style={{ width: "15rem", marginLeft: "40rem" }} />
                <Card title="Welcome to the Pokémon Sales!" style={{
                    width: '20em', display: "inline-block", marginTop: "12rem",
                }}>
                    <p className="m-0" style={{ lineHeight: '1.5' }}>This is a website that people can sell their pokemons or even trade them!
                        If you want to discover more on pokemons, you can click the button below!</p>
                    <Link to="/pokemon-list">
                        <Button label="Pokemon List" className="p-button-outlined p-button-help mt-3" />
                    </Link>
                </Card>
            </div>
        </Layout>
    )
}

export default Home