import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import {useReducer} from 'react';
import {fetchAPI} from './components/api.js';
import ConfirmedBooking from "./components/ConfirmedBooking.js";


function App() {
  const initializeTimes = () => {
    const dateData = new Date();
    const availableTimes = fetchAPI(dateData);
    return availableTimes;
  }
  const updateTimes = (state, date) => {
    const dateData = new Date(date);
    const availableTimes = fetchAPI(dateData);
    return availableTimes;
  }
  const [times, getTimes] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <div className="grid">
        <Header/>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/booking" element={<BookingPage available={times} getTimes={getTimes} />}/>
            <Route path="/confirmation" element={<ConfirmedBooking/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
