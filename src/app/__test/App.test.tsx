import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import App from '../App';


describe("Test of app component", () => {
  it('renders report text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Reports/i);
    
    expect(linkElement).toBeInTheDocument();
  });
});

