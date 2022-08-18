//import those pages in app.js
//then based on the path show each components using react-router componentss
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './booking/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
