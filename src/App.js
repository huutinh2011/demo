
import './App.css';
import LoginForm from './component/LoginForm';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import PageAdd from './component/PageAdd';
import EDIT from './component/EDIT';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/Home/:id/edit" element={<EDIT/>} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Home/PageAdd" element={<PageAdd />} />
      </Routes>
    </div>
  );
}


export default App;
