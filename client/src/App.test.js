import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
const container = render (<App />); });

it('', () => {
  const { getByText } = render(<App />);
  getByText(/World Cup/i);
});

// it('is there a something dark', () => {
//   const { getByTestId  } = render(<App />);
//   getByTestId (/dark/i);
// });
