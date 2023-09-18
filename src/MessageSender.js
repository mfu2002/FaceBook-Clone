import React, {useState} from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';

function MessageSender() {
    const [{user}, dispatch] = useStateValue();

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const handleSubmit = e => {
        e.preventDefault();


        setInput('');
        setImageUrl('');
    }

  return (
    <div className='messageSender'>
        <div className='messageSender__top'>
            <Avatar src={user.photoURL} />
            <form>
                <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className='messageSender__input' 
                placeholder={`What's on our mind, ${user.displayName}?`}/>
                <input
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                placeholder='image URL (Optional)'/>
                <button onClick={handleSubmit} type="submit">Hidden Submit</button>
            </form>
        </div>
        <div className='messageSender__bottom'>
            <div className='messageSender__option'>
                <VideocamIcon style={{color:"red"}} />
                <h3>Live Video</h3>
            </div>
            <div className='messageSender__option'>
                <PhotoLibraryIcon style={{color:"green"}} />
                <h3>Live Video</h3>
            </div>
            <div className='messageSender__option'>
                <InsertEmoticonIcon style={{color:"orange"}} />
                <h3>Live Video</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender