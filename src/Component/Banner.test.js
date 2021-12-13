import { render, screen } from '@testing-library/react';
import Banner from "./Banner"

test('Que le composant Banner affiche', () => {
    render(<Banner/>);
})

test('Que le composant affiche la maison jungle', () => {
    render(<Banner/>);
    const title = screen.getByText(/la maison jungle/i);
    expect(title).toBeInTheDocument()
})