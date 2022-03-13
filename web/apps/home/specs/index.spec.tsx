import { render } from '@testing-library/preact';
import React from 'react';
import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { container } = render(<Index />);
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
