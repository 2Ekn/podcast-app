import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/homePage';
import LoginPage from './components/pages/login-page';
import Profile from './components/pages/profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;