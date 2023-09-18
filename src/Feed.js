import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post profilePic="https://lh3.googleusercontent.com/a/ACg8ocLlCmllXt5yM8dxw1k31ajvRt2r_knzhuiP3spnL2KWYBg=s288-c-no"
                message="This works"
                timestamp="1day ago"
                username="Faisal Karim"
                image="https://www.bettaeventhire.com.au/wp-content/uploads/2020/01/shutterstock_1527035324.jpg"/>
        <Post profilePic="https://lh3.googleusercontent.com/a/ACg8ocLlCmllXt5yM8dxw1k31ajvRt2r_knzhuiP3spnL2KWYBg=s288-c-no"
                message="This works"
                timestamp="1 day ago"
                username="Faisal Karim"
                image="https://www.bettaeventhire.com.au/wp-content/uploads/2020/01/shutterstock_1527035324.jpg"/>
    </div>
  )
}

export default Feed