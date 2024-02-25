import { render, screen } from '@testing-library/react';

import { TextSection } from './TextSection';

describe('TextSection', () => {
  test('renders', () => {
    render(<TextSection />);

    const element = screen.getByText('TextSection');

    expect(element).toBeInTheDocument();
  });
});
