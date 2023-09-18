import React, { useEffect, useState } from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import { getFirestore, collection, getDocs, orderBy, query, onSnapshot } from 'firebase/firestore';
import { useStateValue } from './StateProvider'

function Feed() {
  const [posts, setPosts] = useState([]);

  const db = getFirestore()
  useEffect(()=>{
    async function getFirebasePosts(){
      const q = query(collection(db, 'posts'), orderBy("timestamp", 'desc'))
      onSnapshot(q, querySnapshot => {
        if(querySnapshot.docs !== undefined){
          setPosts(querySnapshot.docs?.map(doc => ({id: doc.id, data: doc.data()})));
        }
      })
    }
    getFirebasePosts()
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


        {/* <Post profilePic="https://people.com/thmb/IvvVMPh2jWP0RwAw2WiWCm46lZo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/sanya-richards-ross-pregnancy-after-losing-baby-072723-tout-9a1607b4fd7a45a69a704e7d6e29bd86.jpg"
                message="Facebook clone working"
                timestamp="1 day ago"
                username="Sarah Osang"
                image="https://www.bettaeventhire.com.au/wp-content/uploads/2020/01/shutterstock_1527035324.jpg"/>
        <Post profilePic="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
                message="Amazing app"
                timestamp="2 day ago"
                username="Famous Person"
                image="https://www.bettaeventhire.com.au/wp-content/uploads/2020/01/shutterstock_1527035324.jpg"/> */}
    </div>
  )
}

export default Feed