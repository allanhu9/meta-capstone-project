import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <meta name="description" content="The Little Lemon Website for the Meta Front End Course"/>
      <meta name="og:title" content="Litle Lemon Website"/>
      <meta name="og:description" content="For the Meta Front End Developer Coursera Course"/>
      <meta name="og:image" content="./images/logo.png"/>
      <div className="grid">
        <Header/>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/booking" element={<BookingPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
