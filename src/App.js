import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeLayout from './layouts/HomeLayout';
import MovieDetailsLayout from './layouts/MovieDetailsLayout';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<HomeLayout />} >
            <Route path = "/movie/:name" element = {<MovieDetailsLayout />} />
          </ Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
