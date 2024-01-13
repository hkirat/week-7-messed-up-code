import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
  // Suspense API
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path='/dashboard'
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path='/'
            element={
              <Suspense fallback={<Loader />}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Loader() {
  return (
    <div className='loader'>
      <div className='spinner-top' />
      <div className='spinner-bottom' />
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <>
      <button className='btn' onClick={() => navigate('/')}>
        Landing page
      </button>
      <button className='btn' onClick={() => navigate('/dashboard')}>
        Dashboard
      </button>
    </>
  );
}

export default App;
