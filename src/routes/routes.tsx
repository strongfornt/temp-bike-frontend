import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { lazy } from "react";
import SuspenseWrapper from "../utils/SuspenseWrapper";
import { customerPaths } from "./customer.routes";
import AuthGuard from "../components/layout/AuthGuard";
import NotFound from "../pages/NotFound/NotFound";
import AllProducts from "../pages/AllProducts/AllProducts";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
const Home = lazy(() => import("../pages/Landing/Home"));
const Landing = lazy(() => import("../pages/Landing/Landing"));
const SignIn = lazy(() => import("../pages/Authentication/SignIn"));
const SignUp = lazy(() => import("../pages/Authentication/SignUp"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: (
      <SuspenseWrapper>
       <Landing />
      </SuspenseWrapper>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <AllProducts />
      },
      {
        path: '/product/:id',
        element: <ProductDetails />
      }
    ]
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/customer",
    element: (
      <ProtectedRoute role="customer">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(customerPaths),
  },
  {
    path: "/sign-up",
    element: (
      <AuthGuard>
        <SuspenseWrapper>
          <SignUp />
        </SuspenseWrapper>
      </AuthGuard>
    ),
  },
  //   {
  //     path: '/change-password',
  //     element: <ChangePassword />,
  //   },
  {
    path: "/signin",
    element: (
      <AuthGuard>
        <SuspenseWrapper>
          <SignIn />
        </SuspenseWrapper>
      </AuthGuard>
    ),
  },
]);

export default router;
