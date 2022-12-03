import React from 'react'

const CourseCard = ({course}) => {
  return (
    <div className='border-[1px] rounded p-3 flex justify-center'>
        <div>
          <div className='flex justify-center'>
            <img
            src={course.image}
            alt={course.title}
            className='w-[200px] h-[150px] md:w-[250px] md:h-[200px] object-cover mb-3' 
            />
          </div> <hr/>
            <h1 className='text-center text-slate-900 mt-2'> {course.title} </h1>
        </div>
    </div>
  )
}

export default CourseCard