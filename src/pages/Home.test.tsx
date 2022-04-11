import { render, screen } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';
import Home from "./Home"

test('Welcome Message', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const welcomeElement = screen.getByText(/Welcome to the Pokémon Sales/i)
    expect(welcomeElement).toBeInTheDocument();
})

test('Homepage buttons', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const listButtonElement = document.querySelector('button')
    expect(listButtonElement).toBeEnabled();
})


test('Welcome Description', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const welcomeDescElement = screen.getByText(/This is a website that people can sell their pokemons or even trade them! If you want to discover more on pokemons, you can click the button below!/i)
    expect(welcomeDescElement).toBeInTheDocument();
})

