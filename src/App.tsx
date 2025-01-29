import DashboardLayout from "./components/layout/DashboardLayout";
import SuspenseWrapper from "./utils/SuspenseWrapper";

function App() {
  // const user = useAppSelector(selectCurrentUser)
  return (
    <>
      <SuspenseWrapper>
        <DashboardLayout />
      </SuspenseWrapper>
    </>
  );
}

export default App;
