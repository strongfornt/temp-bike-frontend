import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./pages/Landing/Home";
import { selectCurrentUser } from "./redux/features/auth/authSlice";
import { useAppSelector } from "./redux/hook";

function App() {
  const user = useAppSelector(selectCurrentUser)
  return (
    <>
      {
        user ? <DashboardLayout/>: <Home/>
      }
    </>
  );
}

export default App;
