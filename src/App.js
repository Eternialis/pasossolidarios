import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
const Dona = React.lazy(() => import('./components/Dona'));
const Nosotros = React.lazy(() => import('./components/Nosotros'));
const Sumate = React.lazy(() => import('./components/Sumate'));
const Login = React.lazy(() => import('./components/Login'));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<Loading />}>
            <Home />
          </React.Suspense>
        } />
        <Route path="/dona" element={
          <React.Suspense fallback={<Loading />}>
            <Dona />
          </React.Suspense>
        } />
        <Route path="/nosotros" element={
          <React.Suspense fallback={<Loading />}>
            <Nosotros />
          </React.Suspense>
        } />
        <Route path="/sumate" element={
          <React.Suspense fallback={<Loading />}>
            <Sumate />
          </React.Suspense>
        } />
        <Route path="/login" element={
          <React.Suspense fallback={<Loading />}>
            <Login />
          </React.Suspense>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App
