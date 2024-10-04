import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeLayout from './layouts/HomeLayout';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<HomeLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
