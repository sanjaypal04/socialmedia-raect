import React from 'react'
import "./share.css"

export default function share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src='/assets/prof.jpg' alt='photo'/>
            <input placeholder="What's in your mind User?" className='shareInput'/>
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <i class="shareIcon bi bi-film"></i>
                    <span className='shareOptionText'>Photo or Video</span>
                </div>
                <div html className="shareOption">
                    <i class="shareIcon bi bi-tag"></i>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                    <i class="shareIcon bi bi-geo-alt"></i>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <i class="shareIcon bi bi-emoji-laughing"></i>
                    <span className='shareOptionText'>Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
