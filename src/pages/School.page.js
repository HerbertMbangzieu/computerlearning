import React from 'react'
import { useParams } from 'react-router-dom'
import { LevelCard } from '../components'
import { schools } from '../data';

const School = () => {
  let {id }= useParams();
  const i = parseInt(id);
  return (
    <div className='mt-10 mx-4'>
    <h1 className='text-2xl md:text-4xl font-bold text-center text-blue-800 mb-3'> {schools[i].name} </h1><hr></hr>
    <div className='md:flex mt-10 justify-center'>
        {
            schools[i].levels.map((level,idx) => (
                <div className='mx-3' key={idx}>
                    <LevelCard level={level} id={i} idx={idx}/>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default School