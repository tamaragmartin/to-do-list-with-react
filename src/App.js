import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import { BrowserRouter } from 'react-router-dom';

import './styles/styles.scss'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
