import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContrext";
import { AuthContext } from "../../Context/authContext";
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
export const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate()
  const { currentUser,logout } = useContext(AuthContext);
  const handleLogout =()=>{
     logout();
     navigate('/login')
  }
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>tolasocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            // src={"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"}
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
          {/* <span>{"Tola Lemma"}</span> */}
         <LogoutTwoToneIcon style={{fontSize:"1.2rem",marginLeft:"5px",cursor: "pointer"}} onClick={handleLogout}/>
        </div>
      </div>
    </div>
  )
}
