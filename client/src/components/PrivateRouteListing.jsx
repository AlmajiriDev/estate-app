import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Listing from "../pages/Listing";

export default function PrivateRouteCreateListing() {
  const { currentUser } = useSelector((state) => state.persistedReducer.user);
  return currentUser ? <Listing /> : <Navigate to="/sign-in" />;
}
