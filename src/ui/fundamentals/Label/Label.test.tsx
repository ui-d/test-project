import { render, screen } from '@testing-library/react';

import { Label } from './Label';

describe('Label', () => {
  test('renders', () => {
    render(<Label />);

    const element = screen.getByText('Label');

    expect(element).toBeInTheDocument();
  });
});
