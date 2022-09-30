import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@material-ui/icons/Twitter'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutlineOutlined'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Button } from '@material-ui/core'
import AuthService from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

const Sidebar= () => {
   const userId = sessionStorage.getItem("userId");
   const navigate = useNavigate();
   const handleLogout = e => {
      e.preventDefault();
      AuthService.logout();
      navigate("/home");
      window.location.reload();
  }
    return (
        <div className = "sidebar">
           <TwitterIcon
              className = "sidebar__twitterIcon"                
           /> 

           <SidebarOption active
              Icon = {HomeIcon}
              text = "Home"  
           />
           <SidebarOption 
              Icon = {SearchIcon}
              text = "Explore"  
           />
           <SidebarOption 
              Icon = {NotificationsNoneIcon}
              text = "Notifications"  
           />
           <SidebarOption 
              Icon = {MailOutlineIcon}
              text = "Message"  
           />
           <SidebarOption 
              Icon = {BookmarkBorderIcon}
              text = "Bookmarks"  
           />
           <SidebarOption
              Icon = {ListAltIcon} 
              text = "Lists"  
           />
           <SidebarOption 
              Icon = {PermIdentityIcon}
              text = "Profile"  
           />
           <SidebarOption 
              Icon = {MoreHorizIcon}
              text = "More"  
           />
           <Button variant = "outlined" className = "sidebar__tweet">{userId}</Button>
           <Button onClick={handleLogout} variant = "outlined" className = "sidebar__tweet">logout</Button>
        </div>
    )
}

export default Sidebar
