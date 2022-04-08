import Layout from "../components/Layout"
import { Fieldset } from 'primereact/fieldset';

const About = () => {
    return (
        <>
            <Layout>
                <div className="card mt-9">
                    <Fieldset legend="About Pokemons 🦒">
                        <p>The franchise began as Pocket Monsters: Red and Green (later released outside of Japan as Pokémon Red and Blue),
                            a pair of video games for the original Game Boy handheld system that were developed by Game Freak and published by Nintendo in February 1996.
                            It soon became a media mix franchise adapted into various different media.
                            Pokémon is estimated to be the highest-grossing media franchise of all time.
                            The Pokémon video game series is the fourth best-selling video game franchise of all time with more than 380 million copies sold
                            and one billion mobile downloads.</p>
                    </Fieldset>
                </div>
            </Layout>
        </>
    )
}

export default About