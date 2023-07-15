import { LeftBar } from "./Components/Leftbar/LeftBar";
import { RightBar } from "./Components/Rightbar/RightBar";
import { NavBar } from "./Components/navbar/NavBar";
import { Profile } from "./pages/Profile/Profile";
import { Login } from "./pages/Login/Login";
import { RegisterPage } from "./pages/Register/Register";
import { Navigate,Outlet ,RouterProvider,createBrowserRouter, } from "react-router-dom"; 
import { Home } from "./pages/Home/Home";
import './style.scss';
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContrext";
import { AuthContext } from "./Context/authContext";
function App() {
  const {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext)
  const Layout = ()=>{
    return(
      <div className={`theme-${darkMode? "dark":"light"}`}>
        <NavBar />
        <div style={{display:"flex"}}>
           <LeftBar />
           <div style={{flex : 6}}>
           <Outlet />
           </div>
           <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children})=>{
     if(!currentUser){
      return <Navigate to='/login'/>; 
     } 
     return children;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
