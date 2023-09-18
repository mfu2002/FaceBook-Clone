import React, { useEffect, useState } from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import { getFirestore, collection, orderBy, query, onSnapshot } from 'firebase/firestore';

function Feed() {
  const [posts, setPosts] = useState([]);

  const db = getFirestore()
  useEffect(()=>{
      const q = query(collection(db, 'posts'), orderBy("timestamp", 'desc'))
      onSnapshot(q, querySnapshot => {
        if(querySnapshot.docs !== undefined){
          setPosts(querySnapshot.docs?.map(doc => ({id: doc.id, data: doc.data()})));
        }
      })
    },[]);
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />

        {posts.map(post => (
          <Post 
            key={post.id}
            postProfilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        ))}
    </div>
  )
}

export default Feed