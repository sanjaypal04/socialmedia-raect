import React from 'react'
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import './profile.css'

export default function Profile() {
  return (
    <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profilerRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src='/assets/ad.jpg' />
                            <img className='profileUserImg' src='/assets/prof.jpg' />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Sanjay Pal</h4>
                            <span className='profileInfoDesc'>Hello....</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                    
                </div>
                
            </div>
        </>
  )
}
