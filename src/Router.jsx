import { createBrowserRouter } from 'react-router-dom';
import Error from './pages/Error';
import NotFoundPage from './pages/NotFoundPage';
import Login from './pages/auth/Login.jsx';
import Home from './pages/Home.jsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/auth/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
export default Router;
