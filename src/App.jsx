import { LeftBar } from "./Components/Leftbar/LeftBar";
import { RightBar } from "./Components/Rightbar/RightBar";
import { NavBar } from "./Components/navbar/NavBar";
import { Profile } from "./pages/Profile/Profile";
import { Login } from "./pages/Login/Login";
import { RegisterPage } from "./pages/Register/Register";
import { Navigate,Outlet ,RouterProvider,createBrowserRouter, } from "react-router-dom"; 
import { Home } from "./pages/Home/Home";
function App() {
  const currentUser = true;
  const Layout = ()=>{
    return(
      <div>
        <NavBar />
        <div style={{display:"flex"}}>
           <LeftBar />
           <Outlet />
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
