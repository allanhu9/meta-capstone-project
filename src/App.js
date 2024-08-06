import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";
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
        <Nav/>
        <Main/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
