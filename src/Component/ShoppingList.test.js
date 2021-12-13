import { render, screen } from '@testing-library/react';
import ShoppingList from "./ShoppingList"

test("Je vérifie si la shopingList apparait", () => {
    render(<ShoppingList/>)
})
test("je vérifie si le mot yucca s'affiche", () => {
    render(<ShoppingList/>)
    const yucca = screen.getByText(/yucca/i)
    expect(yucca).toBeInTheDocument()
})

test("je vérifie si il y a bien 5 plante qui s'affiche", () => {
    const {container} = render(<ShoppingList/>)
    const plantes = container.querySelectorAll("Li")
    expect(plantes.length).toBe(5)
})
test("Je vérifie si palmier est rouge", () => {
    render(<ShoppingList/>)
    const palmier = screen.getByText(/palmier/i)
    expect(palmier.style.color).toBe('red')
})