import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Noticias from './components/pages/Noticias';
import RequireAuth from './components/RequireAuth';
const Sumate = React.lazy(() => import('./components/pages/Sumate'));
const Login = React.lazy(() => import('./components/pages/Login'));
const Edicion = React.lazy(() => import('./components/pages/Edicion'));

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
        <Route path="/noticias" element={
          <React.Suspense fallback={<Loading />}>
            <Noticias />
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
        <Route path="/edicion" element={
          <RequireAuth>
            <React.Suspense fallback={<Loading />}>
              <Edicion />
            </React.Suspense>
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App
