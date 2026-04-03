// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HackEthicalForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HackEthicalForge/i);
    expect(titleElement).toBeInTheDocument();
});
