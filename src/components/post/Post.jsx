import React, {useState} from 'react'
import "./Post.css"
import {Users} from "../../dummyData"
export default function Post({post}) {
  
  const[like,setLike] = useState(0)
  const[isLiked,setisLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setisLiked(!isLiked)
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
                <span className="postUserName">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
            <i class="bi bi-three-dots-vertical"></i>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className='postImg' src={post.photo} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
            <img className='likeIcon' src="/assets/like.jpg" onClick={likeHandler} alt="" />
            <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} Comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
