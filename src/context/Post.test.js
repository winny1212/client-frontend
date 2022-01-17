import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CounterProvider, { CounterContext, Counter } from './TestContext';

const renderWithContext = (component) => {
  return {
    ...render(
      <PostContextProvider value={PostContext}>
        {component}
      </PostContextProvider>,
    ),
  };
};

afterEach(cleanup);

it('checks if initial state of title is equal to "" ', () => {
  const { getByTestId } = renderWithContext(<Counter />);
  expect(getByTestId('counter')).toHaveTextContent('0');
});
