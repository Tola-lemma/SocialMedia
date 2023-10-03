import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Posts } from "../../Components/Posts/Posts";
import { useParams } from "react-router-dom";
import ReactGA from 'react-ga4'
import { useEffect } from "react";
export const Profile = () => {
  //non interaction
  useEffect(()=>{
    ReactGA.send(window.location.pathname);
  },[])
  const {id}  = useParams();
  const name = id === "1" ? "Tola Wake" : "Merry Ketsela";
  const website = id === "1" ? "tolawake.com" : "merryketsela.com";
  const cover = id === "1" ? "https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?auto=compress&cs=tinysrgb&w=600" : "https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const profile = id === "1" ? "https://images.pexels.com/photos/5965925/pexels-photo-5965925.jpeg?auto=compress&cs=tinysrgb&w=600" : "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600";
  return (
    <div className="profile">
      <div className="images">
        <img
          src={cover}
          alt=""
          className="cover"
        />
        <img
          src={profile}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Ethiopia</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span><a href="http://wwww.facebook.com/m.tolalemma" style={{textDecoration:"none",fontWeight:"bolder"}}>{website}</a></span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts />
      </div>
    </div>
  );
};