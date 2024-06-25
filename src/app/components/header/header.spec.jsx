import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { SearchProvider } from '../../context/search-context';

test('renders header title correctly', () => {
    render(
        <SearchProvider>
            <Header />
        </SearchProvider>
    );

    const titleElement = screen.getByText('Rick and Morty');
    expect(titleElement).toBeInTheDocument();
});
