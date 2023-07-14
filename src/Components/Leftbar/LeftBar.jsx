import React from 'react'
import './leftBar.scss'
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import SlideshowTwoToneIcon from '@mui/icons-material/SlideshowTwoTone';
import MemoryTwoToneIcon from '@mui/icons-material/MemoryTwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import CurrencyExchangeTwoToneIcon from '@mui/icons-material/CurrencyExchangeTwoTone';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import CollectionsTwoToneIcon from '@mui/icons-material/CollectionsTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
export const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className='container'>
        <div className="menu">
        <div className="user">
          <img
            src={"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
          <span>{"Tola Lemma"}</span>
        </div>
         <div className="item">
          <PeopleAltTwoToneIcon style={{color:"blue",width:"30px"}}/>
          <span>Friends</span>
         </div>
         <div className="item">
          <GroupAddTwoToneIcon style={{color:"navy",width:"30px"}}/>
          <span>Groups</span>
         </div>
         <div className="item">
          <LocalGroceryStoreTwoToneIcon style={{color:"darkslateblue",width:"30px"}}/>
          <span>Marketplace</span>
         </div>
         <div className="item">
          <SlideshowTwoToneIcon style={{color:"deeppink",width:"30px"}}/>
          <span>Watch</span>
         </div>
         <div className="item">
          <MemoryTwoToneIcon style={{color:"blue",width:"30px"}}/>
          <span>Memories</span>
         </div>
        </div>
        <hr/>
        <div className='menu'>
          <span>Your Shortcuts</span>
          <div className="item">
          <CalendarMonthTwoToneIcon style={{color:"blue",width:"30px"}}/>
          <span>Events</span>
         </div>
         <div className="item">
          <SportsEsportsTwoToneIcon style={{color:"navy",width:"30px"}}/>
          <span>Gaming</span>
         </div>
         <div className="item">
          <CollectionsTwoToneIcon style={{color:"darkcyan",width:"30px"}}/>
          <span>Gallery</span>
         </div>
         <div className="item">
          <VideocamTwoToneIcon style={{color:"magenta",width:"30px"}}/>
          <span>Videos</span>
         </div>
         <div className="item">
          <MailOutlineTwoToneIcon style={{color:"indigo",width:"30px"}}/>
          <span>Messages</span>
         </div>
        </div>
        <hr/>
        <div className='menu'>
          <span>Others</span>
          <div className="item">
          <CurrencyExchangeTwoToneIcon style={{color:"blue",width:"30px"}}/>
          <span>Fundraiser</span>
         </div>
          <div className="item">
          <DriveFileRenameOutlineTwoToneIcon style={{color:"darkcyan",width:"30px"}}/>
          <span>Tutorials</span>
         </div>
         <div className="item">
          <OndemandVideoTwoToneIcon style={{color:"green",width:"30px"}}/>
          <span>Courses</span>
         </div>
        </div>
      </div>
    </div>
  )
}
