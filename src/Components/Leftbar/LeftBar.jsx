import './leftBar.scss'
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import SlideshowTwoToneIcon from '@mui/icons-material/SlideshowTwoTone';
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import CurrencyExchangeTwoToneIcon from '@mui/icons-material/CurrencyExchangeTwoTone';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import CollectionsTwoToneIcon from '@mui/icons-material/CollectionsTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import { useContext } from 'react';
import { DarkModeContext } from '../../Context/darkModeContrext';
import { AuthContext } from '../../Context/authContext';
export const LeftBar = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const getItemStyle = (color) => {
    return {
      color: darkMode ? 'cyan' : color,
      width: '30px'
    };
  };
  return (
    <div className='leftBar'>
      <div className='container'>
        <div className="menu">
        <div className="user">
          <img
            // src={"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"}
            src={currentUser.profilePic}
            alt=""
          />
          {/* <span>{"Tola Lemma"}</span> */}
          <span>{currentUser.name}</span>
        </div>
         <div className="item">
          <PeopleAltTwoToneIcon style={getItemStyle('blue')}/>
          <span>Friends</span>
         </div>
         <div className="item">
          <GroupAddTwoToneIcon style={getItemStyle('navy')}/>
          <span>Groups</span>
         </div>
         <div className="item">
          <LocalGroceryStoreTwoToneIcon style={getItemStyle('darkslateblue')}/>
          <span>Marketplace</span>
         </div>
         <div className="item">
          <SlideshowTwoToneIcon style={getItemStyle('deeppink')}/>
          <span>Watch</span>
         </div>
         <div className="item">
          <TimerTwoToneIcon style={getItemStyle('darkblue')}/>
          <span>Memories</span>
         </div>
        </div>
        <hr/>
        <div className='menu'>
          <span>Your Shortcuts</span>
          <div className="item">
          <CalendarMonthTwoToneIcon style={getItemStyle('blue')}/>
          <span>Events</span>
         </div>
         <div className="item">
          <SportsEsportsTwoToneIcon style={getItemStyle('navy')}/>
          <span>Gaming</span>
         </div>
         <div className="item">
          <CollectionsTwoToneIcon style={getItemStyle('darkcyan')}/>
          <span>Gallery</span>
         </div>
         <div className="item">
          <VideocamTwoToneIcon style={getItemStyle('magenta')}/>
          <span>Videos</span>
         </div>
         <div className="item">
          <MailOutlineTwoToneIcon style={getItemStyle('indigo')}/>
          <span>Messages</span>
         </div>
        </div>
        <hr/>
        <div className='menu'>
          <span>Others</span>
          <div className="item">
          <CurrencyExchangeTwoToneIcon style={getItemStyle('blue')}/>
          <span>Fundraiser</span>
         </div>
          <div className="item">
          <DriveFileRenameOutlineTwoToneIcon style={getItemStyle('darkcyan')}/>
          <span>Tutorials</span>
         </div>
         <div className="item">
          <OndemandVideoTwoToneIcon style={getItemStyle('green')}/>
          <span>Courses</span>
         </div>
        </div>
      </div>
    </div>
  )
}
