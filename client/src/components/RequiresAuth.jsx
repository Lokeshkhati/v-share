import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

function RequiresAuth({ children }) {
  const { token } = useAuth();
  const location = useLocation();
  console.log(token)

  return token ? (
    <>{children}</>
  ) : (
    <Navigate state={{ path: location.pathname }} to="/login" replace />
  );
}

export default RequiresAuth;
