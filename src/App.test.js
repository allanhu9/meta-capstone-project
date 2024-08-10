import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './components/BookingPage';
import { BrowserRouter } from 'react-router-dom';
import {fetchAPI} from './components/api.js';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

test('Renders the BookingForm heading', () => {
  render(
  <BrowserRouter>
    <BookingPage available={['12:00']} />
  </BrowserRouter>
  );
  const headingElement = screen.getByText("Make a Reservation");
  expect(headingElement).toBeInTheDocument();
})
test('testing initializeTimes function', () => {
  render(<App />);
  const bookingLink = screen.getByTestId('bookingLink');
  fireEvent.click(bookingLink);
  const timeOptions = screen.getAllByTestId('timeOption');
  const expectedTimeOptions = fetchAPI(new Date());
  expect(timeOptions).toHaveLength(expectedTimeOptions.length);
  for (let i = 0; i < expectedTimeOptions.length; i++) {
    expect(expectedTimeOptions[i]).toMatch(timeOptions[i].value);
  }
})

test('testing updateTimes function', () => {
  render(<App/>);
  const bookingLink = screen.getByTestId('bookingLink');
  fireEvent.click(bookingLink);
  const date = screen.getByLabelText('Choose date');
  fireEvent.change(date, {target: {value: '2024-08-20'}});
  const expectedTimeOptions = fetchAPI(new Date('2024-08-20'));
  const timeOptions = screen.getAllByTestId('timeOption');

  expect(timeOptions).toHaveLength(expectedTimeOptions.length);
  for (let i = 0; i < expectedTimeOptions.length; i++) {
    expect(expectedTimeOptions[i]).toMatch(timeOptions[i].value);
  }
})

test('submit form', () => {
  render(<App />);
  const bookingLink = screen.getByTestId('bookingLink');
  fireEvent.click(bookingLink);
  const submitButton = screen.getByTestId('submit');
  fireEvent.click(submitButton);
  const bookingFeedback = screen.getByTestId('submitted');
  expect(bookingFeedback).toBeInTheDocument();
})

test('submit form', () => {
  render(<App />);
  const bookingLink = screen.getByTestId('bookingLink');
  fireEvent.click(bookingLink);
  const guests = screen.getByLabelText('Number of guests');
  fireEvent.change(guests, {target: {value: -1}});
  const submitButton = screen.getByTestId('submit');
  fireEvent.click(submitButton);
  const bookingFeedback = screen.queryByTestId('submitted');
  expect(bookingFeedback).toBeNull();
})