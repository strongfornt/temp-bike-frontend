import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProtectedRoute from '../components/layout/ProtectedRoute';
import { routeGenerator } from '../utils/routesGenerator';
import { adminPaths } from './admin.routes';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute role="admin">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  //   {
  //     path: '/change-password',
  //     element: <ChangePassword />,
  //   },
  {
    path: '/signin',
    element: <SignIn />,
  },
]);

export default router;
