import { render, screen } from '@testing-library/react';

import { Select } from './Select';

describe('Select', () => {
  test('renders', () => {
    render(<Select />);

    const element = screen.getByText('Select');

    expect(element).toBeInTheDocument();
  });
});
