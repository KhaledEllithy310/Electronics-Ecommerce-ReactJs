import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import NavbarUi from "./components/NavbarUi";
import CartWindow from "./components/CartWindow";
<link
  href="https://fonts.googleapis.com/css2?family=Geologica:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
></link>;

function App() {
  return (
    <>
      <NavbarUi />
      {/* <CartWindow /> */}
      <Routes>
        {/* <Home /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
