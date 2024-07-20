import React, { useRef, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

function Comments() {
    const [comments, setComments] = useState([{ ipval: "Rachin", Comments: "Hello Boy", like: "like" }])
    const [st, setSt] = useState(1)
    const ipval = useRef('')
    const txtval = useRef('')

    const del = () => {

    }

    const comm = () => {
        const newComment = {
            ipval: ipval.current.value,
            Comments: txtval.current.value
        }

        setComments([...comments, newComment])
        setSt(st + 1)

        ipval.current.value = ''
        txtval.current.value = ''
    }

    return (
        <div>
            <h1>Comments</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 flex flex-col items-start'>
                        <p>Say something...</p>
                        <input ref={ipval} className='border-2' type='text' placeholder='Your Name' />
                        <textarea ref={txtval} className='border-2 my-3' rows={4} cols={22} placeholder='Your Comment' ></textarea>
                        <button onClick={comm} className='bg bg-cyan-500 p-2 rounded-xl'>Add Comment</button>
                    </div>
                    <div className='col-6'>
                        <img alt='img' className='w-3/5 ml-12' src='https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png' />
                    </div>
                    <hr />
                    <p><span className='bg bg-cyan-500 p-1'>{st}</span> Comments</p>
                    {comments.map((comment, index) => (
                        <div key={index} className='mt-2'>
                            <div>
                                <span className='p-2 bg-red-500 rounded-full'>{comment.ipval[0]}</span>
                                <span className='mx-3 text-xl'>{comment.ipval}</span>
                                <span>Just now</span>
                            </div>
                            <p className='ml-10 text-gray-500'>{comment.Comments}</p>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <img src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png" alt="liked" />
                                    <span className='ml-3'>Liked</span>
                                </div>
                                <button onClick={del}><img src='https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png' /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Comments
