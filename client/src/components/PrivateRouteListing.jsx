import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import CreateListing from "../pages/CreateListing";

export default function PrivateRouteListing() {
  const { currentUser } = useSelector((state) => state.persistedReducer.user);
  return currentUser ? <CreateListing /> : <Navigate to="/sign-in" />;
}
