import './App.scss';
import Home from '../src/components/Home/Home'
import Main from '../src/components/Main/Main'
import Boost from '../src/components/Boost/Boost'
import Footer from '../src/components/Footer/Footer'

function App() {
  return (
    <main className="App">
      <Home/>
      <Main/>
      <Boost/>
      <Footer/>
    </main>
  );
}

export default App;
