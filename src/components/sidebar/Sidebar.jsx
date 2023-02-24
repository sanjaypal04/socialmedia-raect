import React from "react";
import "./Sidebar.css";
import CloseFriend from "../closeFriends/CloseFriend";
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapp">
               <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <i class="sidebarIcon bi bi-rss"></i>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="sidebarIcon bi bi-chat"></i>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="sidebarIcon bi bi-play-circle"></i>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="sidebarIcon bi bi-chat"></i>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="sidebarIcon bi bi-bookmark"></i>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="sidebarIcon bi bi-question-circle"></i>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="sidebarIcon bi bi-bag"></i>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="sidebarIcon bi bi-calendar-event"></i>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="sidebarIcon bi bi-mortarboard-fill"></i>
                        <span className="sidebarListItemText">Education</span>
                    </li>
                </ul> 
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>

                <ul className="sidebarFriendList    ">
                    {Users.map(u=>(
                        <CloseFriend Key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}