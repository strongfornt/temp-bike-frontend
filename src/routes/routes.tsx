import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthGuard from "../components/layout/AuthGuard";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AllProducts from "../pages/AllProducts/AllProducts";
import NotFound from "../pages/NotFound/NotFound";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import { routeGenerator } from "../utils/routesGenerator";
import SuspenseWrapper from "../utils/SuspenseWrapper";
import { adminPaths } from "./admin.routes";
import { customerPaths } from "./customer.routes";
import OrderVerification from "../pages/order/VerifyOrder";
import About from "../pages/About/About";
import Contact from "../pages/Landing/Contact";
import Blog from "../pages/Blogs/Blog";
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
      },
      {
        path: '/verify-order',
        element: <ProtectedRoute role="customer">
          <OrderVerification />
        </ProtectedRoute>
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/blog',
        element: <Blog />
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
