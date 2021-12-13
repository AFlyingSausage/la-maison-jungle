import { render, screen } from '@testing-library/react';
import Cart from "./Cart"

test('Que le Cart affiche bien', () => {
    render(<Cart />)
})
test("Que le total s'affiche bien", () => {
    render(<Cart/>);
    const total = screen.getByText(/total/i);
    expect(total).toBeInTheDocument()
})