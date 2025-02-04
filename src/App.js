import {Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Posts from './pages/Posts';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
