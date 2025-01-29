import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { logout, useCurrentToken } from '../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { verifyToken } from '../../utils/verifyToken';

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  let user :any;

  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();
  

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/signin" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/signin" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
