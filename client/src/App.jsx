import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import PrivateRouteProfile from "./components/PrivateRouteProfile";
import PrivateRouteListing from "./components/PrivateRouteListing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<PrivateRouteProfile />} />
        <Route path="/create-listing" element={<PrivateRouteListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
