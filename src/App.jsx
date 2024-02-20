import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import DiscoverPage from './pages/DiscoverPage';
import InitiateLogin from './pages/InitiateSignup';
import SignupPage from './pages/Signup';
import Login from './pages/Login';
import WriteLettterPage from './pages/WriteLetterPage';
import OutboxPage from './pages/OutboxPage';
import ViewSentLetterPage from './pages/ViewSentLetterPage';
import InboxPage from './pages/InboxPage';
import ViewRecievdLetterPage from './pages/ViewRecivedLetter';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/initiateLogin" element={<InitiateLogin />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<Login />} />
      {/* Redirect all other paths to the landing page */}
      <Route path="/*" element={<Navigate to="/" replace />} />

      <Route path="/" element={<LandingPage />} />
      <Route path="/discover" element={<DiscoverPage />} />
      <Route path="/letter/write-letter/:name/:id" element={<WriteLettterPage />} />
      <Route path="/outbox" element={<OutboxPage />} />
      <Route path="/view-sent-letter/:id" element={<ViewSentLetterPage />} />
      <Route path="/Inbox" element={<InboxPage />} />
      <Route path="/view-recieved-letter/:id" element={<ViewRecievdLetterPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
