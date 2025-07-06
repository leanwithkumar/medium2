import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextareaAutosize from 'react-textarea-autosize'

function Publish() {
  const [title , setTitle] = useState("")
  const [content, setContent] =  useState("")
  const publishthis = async()=>{
    try{
      if(!title || !content){
        return alert("all fields are required")
      }
      const posted = await axios.post("http://localhost:5000/addblog", {
        title,
        content,
        author : "686a92f7a6af046200e48fdc"
      })
      alert("posted")
      console.log(posted)
      

    }
    catch(err){
      console.log(err)
      alert(err.message)

    }
  }
  return (

    <>
    <div>
      <div className="w-full border-b border-gray-300">
      <div className="flex justify-evenly items-center md:px-25 px-5">
        <div className='flex justify-between'>
          <Link to='/medium2'>
            <div>
              <img
                src="/Medium2.png"
                width="170"
                height="40"
                className="max-w-full h-auto py-5"
                alt="Logo"
              />
            </div>
          </Link>

          
        </div>

        <div className="hidden md:flex flex-wrap justify-center gap-4 p-2 text-base sm:text-lg md:text-xl">
          
             <button onClick={publishthis}
              className="text-white px-8 py-2 rounded-full bg-green-400 font-medium shadow-sm">
              Publish
              </button>
          

          
          
        </div>

        
       
      </div>

      
    </div>



    </div>



     <div className='mx-5 md:ml-30 md:mr-80 my-20'>
      
      <div className="pb-10">
        <TextareaAutosize
          minRows={1}
          className="text-5xl font-san text-gray-600 border-l-2 pl-5 focus:outline-none w-full 
                     placeholder:text-5xl placeholder:font-serif 
                     resize-none overflow-hidden"
          placeholder="Share your thought"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      
      
      <div className="pb-10">
        <TextareaAutosize
          minRows={5}
          className="text-2xl text-gray-600 border-l-2 pl-5 focus:outline-none w-full 
                     placeholder:text-3xl placeholder:font-serif 
                     resize-none overflow-hidden"
          placeholder="Make us understand"
          value={content}
          onChange={(e)=>setContent(e.target.value)}
        />
      </div>

 
    </div>


    
    </>
   
  )
}

export default Publish
