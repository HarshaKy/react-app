import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <><Header /><Main view='blogs'/><Nav /><Footer /></>
          }>
          </Route>
          <Route exact path='/blog/:id' element={
            <><Header /><Main view='blog' /><Nav /><Footer /></>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
