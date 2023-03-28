import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MockUpPage from '../MockUpPage/MockUpPage';
import SavedPalettesList from '../SavedPalettesList/SavedPalettesList';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/mockup" element={<MockUpPage />} />
              <Route path="/saved" element={<SavedPalettesList />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
          
        }
    </main>
  );
}
