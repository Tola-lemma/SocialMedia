import { Login } from "./pages/Login/Login";
import { RegisterPage } from "./pages/Register/Register";
import { Route, Routes } from "react-router-dom"; 
function App() {
  return (
    <Routes>
      {/* <Route exact path="/" component={HomePage} /> */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
