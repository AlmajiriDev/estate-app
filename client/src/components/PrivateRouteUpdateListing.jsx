import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import UpdateListing from "../pages/UpdateListing";

export default function PrivateRouteUpdateListing() {
  const { currentUser } = useSelector((state) => state.persistedReducer.user);
  return currentUser ? <UpdateListing /> : <Navigate to="/sign-in" />;
}
