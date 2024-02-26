import { render, screen } from '@testing-library/react';

import { Card } from './Card';

describe('Card', () => {
  test('renders', () => {
    render(<Card />);

    const element = screen.getByText('Card');

    expect(element).toBeInTheDocument();
  });
});
