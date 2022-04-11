import { screen, render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import PokemonList from "./PokemonList"
import { rest } from 'msw';
import { setupServer } from "msw/node";


const apiUrlForTest = "https://pokeapi.co/api/v2/pokemon?offset=0"
const pokeListResponse = rest.get(apiUrlForTest, (req, res, ctx) => {
    return res(ctx.json({
        results: [
            { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
            { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
            { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
            { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
            { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
            { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
            { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
            { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
        ]
    }))
});

const handlers = [pokeListResponse]

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('Bulbasaur test', async () => {
    render(<PokemonList />, { wrapper: MemoryRouter })
    const pokeListElement = await screen.findByText("bulbasaur");
    expect(pokeListElement).toBeVisible();
})

test('Ivysaur test', async () => {
    render(<PokemonList />, { wrapper: MemoryRouter })
    const pokeListElementTwo = await screen.findByText("ivysaur");
    expect(pokeListElementTwo).toBeVisible();
})

test('Venusaur test', async () => {
    render(<PokemonList />, { wrapper: MemoryRouter })
    const pokeListElementThree = await screen.findByText("venusaur");
    expect(pokeListElementThree).toBeVisible();
})

test('Charmander test', async () => {
    render(<PokemonList />, { wrapper: MemoryRouter })
    const pokeListElementFour = await screen.findByText("charmander");
    expect(pokeListElementFour).toBeVisible();
})

test('Charmeleon test', async () => {
    render(<PokemonList />, { wrapper: MemoryRouter })
    const pokeListElementFive = await screen.findByText("charmeleon");
    expect(pokeListElementFive).toBeVisible();
})

test('Charizard test', async () => {
    render(<PokemonList />, { wrapper: MemoryRouter })
    const pokeListElementSix = await screen.findByText("charizard");
    expect(pokeListElementSix).toBeVisible();
})

test('Squirtle test', async () => {
    render(<PokemonList />, { wrapper: MemoryRouter })
    const pokeListElementSeven = await screen.findByText("squirtle");
    expect(pokeListElementSeven).toBeVisible();
})

test('Wartortle test', async () => {
    render(<PokemonList />, { wrapper: MemoryRouter })
    const pokeListElementEight = await screen.findByText("wartortle");
    expect(pokeListElementEight).toBeVisible();
})