import './App.css';
import {Header} from './semantic_jsx/Header';
import {Nav} from './semantic_jsx/Nav';
import {Main} from './semantic_jsx/Main';
import {Footer} from './semantic_jsx/Footer';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;