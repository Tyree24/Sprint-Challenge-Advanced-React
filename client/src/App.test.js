import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Navbar contains text', () => {
  const { getByText } = render(<App />);
  getByText(/World Cup/i);
});

test('is there a something dark', () => {
  const { getByTestId  } = render(<App />);
  getByTestId (/dark/i);
});
