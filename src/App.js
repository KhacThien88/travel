import logo from './logo.svg';
import './App.css';
import Footer from '../src/Component/Footer/Footer' ;
import Home from '../src/Component/Home/Home' ;
import Main from '../src/Component/Main/Main';
import Navbar from './Component/Navbar/navbar'


function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Home />
        <Main />
        <Footer />
      </>
    </div>
  );
}

export default App;
