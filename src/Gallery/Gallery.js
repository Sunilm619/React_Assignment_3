import React, { useState } from 'react'
import './index.css'
const sceneryGallery = [
    { id: 1, imgurl: 'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: 2, imgurl: 'https://images.pexels.com/photos/3573350/pexels-photo-3573350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: 3, imgurl: 'https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: 4, imgurl: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: 5, imgurl: 'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: 6, imgurl: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: 7, imgurl: 'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: 8, imgurl: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg' },
    { id: 9, imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ22nKZ2e92aTDby6JBTZwDJPrTpy12vm0Q&s' },
    { id: 10, imgurl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
];

function Gallery() {
    const [st, setSt] = useState(sceneryGallery[0].imgurl)
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div >
                <img className='w-[75vw] h-[70vh]' src={st} />
                <div className='flex mt-4'>
                    {sceneryGallery.map(e => <ul ><li><img onClick={() => { setSt(e.imgurl) }} className='w-24 h-10' src={e.imgurl} key={e.id} /></li></ul>)}
                </div>
            </div>
        </div>
    )
}

export default Gallery