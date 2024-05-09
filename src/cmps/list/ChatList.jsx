import React from 'react'
import { useState, useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"

function ChatList(){
  const [addMode, setAddMode] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const timeoutRef = useRef()

  const handleScroll = () => {
    if(timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsScrolling(true)
    timeoutRef.current = setTimeout(() => setIsScrolling(false), 999)
  }

  return (
    <div className={`chatList flex-1 overflow-y-auto ${isScrolling ? 'scrolling' : ''}`} onScroll={handleScroll}>
      <div className="search flex items-center justify-between gap-5 p-5">
        <div className="search-bar p-3 flex gap-5 rounded-lg bg-myBlue">
          <img className="w-5 h-5" src="/search.png" alt="" />
          <input className='bg-transparent border-none outline-none text-white' type="text" placeholder='Search' />
        </div>
        <img className="w-5 h-5 p-3 mx-2 rounded-md cursor-pointer bg-myBlue" onClick={() => setAddMode(!addMode)} src={addMode ? './minus.png' : './plus.png'} alt="plus" />
      </div>
      <div className="item flex items-center gap-5 p-3 border-b border-myBorder ml-2">
        <Avatar className="w-12 h-12">
          <AvatarImage src="./avatar.png" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div className="texts">
          <span className='font-bold'>Jane Doe</span>
          <p className='max-w-52 text-sm font-thin whitespace-nowrap overflow-hidden text-ellipsis'>Hey, how are you doing? sfdsdf sdf sdf dsf dsfsdfsd sdfdf sf sdfs df sdfsdfs</p>
        </div>
      </div>
      <div className="item flex items-center gap-5 p-3 border-b border-myBorder">
        <Avatar className="w-12 h-12">
          <AvatarImage src="./avatar.png" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hey, how are you doing?</p>
        </div>
      </div>
      <div className="item flex items-center gap-5 p-3 border-b border-[#dddddd35]">
        <Avatar className="w-12 h-12">
          <AvatarImage src="./avatar.png" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hey, how are you doing?</p>
        </div>
      </div>
      <div className="item flex items-center gap-5 p-3 border-b border-[#dddddd35]">
        <Avatar className="w-12 h-12">
          <AvatarImage src="./avatar.png" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hey, how are you doing?</p>
        </div>
      </div>
      <div className="item flex items-center gap-5 p-3 border-b border-[#dddddd35]">
        <Avatar className="w-12 h-12">
          <AvatarImage src="./avatar.png" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hey, how are you doing?</p>
        </div>
      </div>
      <div className="item flex items-center gap-5 p-3 border-b border-[#dddddd35]">
        <Avatar className="w-12 h-12">
          <AvatarImage src="./avatar.png" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hey, how are you doing?</p>
        </div>
      </div>
      <div className="item flex items-center gap-5 p-3 border-b border-[#dddddd35]">
        <Avatar className="w-12 h-12">
          <AvatarImage src="./avatar.png" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hey, how are you doing?</p>
        </div>
      </div>
      <div className="item flex items-center gap-5 p-3 border-b border-[#dddddd35]">
        <Avatar className="w-12 h-12">
          <AvatarImage src="./avatar.png" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hey, how are you doing?</p>
        </div>
      </div>
      <div className="item flex items-center gap-5 p-3 border-b border-[#dddddd35]">
        <Avatar className="w-12 h-12">
          <AvatarImage src="./avatar.png" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hey, how are you doing?</p>
        </div>
      </div>
      <div className="item flex items-center gap-5 p-3 border-b border-[#dddddd35]">
        <Avatar className="w-12 h-12">
          <AvatarImage src="./avatar.png" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hey, how are you doing?</p>
        </div>
      </div>

      
     
    </div>
  )
}

export default ChatList