import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { useState } from 'react';
import ModeState from './context/mode/modeState';

function App() {
  // just we will used prop dilling for alert
  const [alert, setAlert] = useState({});


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  return (
    <NoteState>
      <ModeState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home showAlert={showAlert} />} />
              <Route index path='/login' element={<Login showAlert={showAlert} />} />
              <Route path='/signup' element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ModeState>
    </NoteState>
  )
}

export default App
