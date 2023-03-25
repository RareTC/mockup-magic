import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MockUpPage from '../MockUpPage/MockUpPage';
import SavedPalettesPage from '../SavedPalettesPage/SavedPalettesPage';
import NavBar from '../../components/NavBar/NavBar';
import PaletteFetchForm from '../PaletteFetchForm/PaletteFetchForm';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <PaletteFetchForm />
            <Routes>
              {/* Route components in here */}
              <Route path="" element={<MockUpPage />} />
              <Route path="" element={<SavedPalettesPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
          
        }
    </main>
  );
}
