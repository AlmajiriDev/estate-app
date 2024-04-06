import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Profile from "../pages/Profile";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.persistedReducer.user);
  return currentUser ? <Profile /> : <Navigate to="/sign-in" />;
}
