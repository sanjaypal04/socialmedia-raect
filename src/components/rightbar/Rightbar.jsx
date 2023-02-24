import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
function Rightbar({profile})
{

  const HomeRightbar = ()=>{
    return(
      <>
        <div className="birthdayContainer">
              <img className="birthdayImg" src="/assets/b'day.png" alt="" />
              <span className="birthdayText"><b>asadsaa</b> and <b>3 other</b> have a birthday today.</span>
            </div>
            <img className="rightbarAd" src="/assets/ad.jpg" alt="" />
            <h4 className="rigtbarTitle">Online Friends</h4>
            <ul className="rightbarFriendsList">
              {Users.map(u=>(
                <Online key={u.id} user={u}/>
              ))}
            </ul>
      </>
    )
  }

  const Profilerightbar = () =>{
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Country:</span>
            <span className="rightbarInfoValue">India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Lucknow</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Date of birth:</span>
            <span className="rightbarInfoValue">01/01/0000</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/prof.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">sanjay pal</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/prof.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">sanjay pal</span>
          </div>
        </div>
      </>
    )
  }
    return(
        <div className="rightbar">
          <div className="rightbarWrapper">
            <Profilerightbar/>
          </div>
        </div>
    )
}
export default Rightbar