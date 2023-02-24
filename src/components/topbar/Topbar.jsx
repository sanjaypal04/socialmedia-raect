import React from "react";
import "./Topbar.css"
function Topbar()
{
    return(
    <>
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">SOCIAL APP</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <i class="search-icon bi bi-search"></i>
                    <input placeholder="Search For Friend, Post and Video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItems">
                        <i class="bi bi-person"></i>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItems">
                        <i class="bi bi-chat"></i>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItems">
                        <i class="bi bi-bell"></i>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src="assets/prof.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    </>
    )
}
export default Topbar

//19:23