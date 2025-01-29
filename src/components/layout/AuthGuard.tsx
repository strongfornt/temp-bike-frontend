import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hook";

type AuthGuardProps = {
  children: ReactNode;
};

const AuthGuard = ({ children }: AuthGuardProps) => {
  const user = useAppSelector(selectCurrentUser)

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>; // Allow access if no user
};

export default AuthGuard;
