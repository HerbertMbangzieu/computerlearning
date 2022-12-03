import React from 'react'
import { useParams } from 'react-router-dom'
import { schools } from '../data';
import parse from 'html-react-parser';

const Course = () => {
    const {i, idx, ind} = useParams();
    const course = schools[i].levels[idx].content.courses[parseInt(ind)]
    console.log(course);
  return (
    <div>
        
        <div className='relative w-full h-[200px] md:h-[300px]'>
            <img
            src={course.image}
            alt={course.title}
            className="w-full h-[200px] md:h-[300px] object-cover absolute"
            />
            <div className='absolute w-full h-[200px] md:h-[300px] bg-black bg-opacity-60 z-10 flex justify-center items-center'>
                <h1 className='font-bold text-center text-xl md:text-3xl text-white'> {course.title} </h1>
            </div>
        </div>
        <div className='p-3 md:p-6'>
        <div className='mt-4'>
            <h1 className='text-3xl text-black font-bold'> Plan of the course </h1>
            <div className='p-3 rounded-md border-[1px] mt-2'>
                <ol>
                    {
                        course.objectives.map((objective, ix) => (
                            <li className='my-3'> {ix+1}. {parse(objective)}</li>
                        ))
                    }
                </ol>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Course