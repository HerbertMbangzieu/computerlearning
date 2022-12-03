import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { CourseCard } from '../components';
import { schools } from '../data';

const Classe = () => {
  let {i, id, idx}= useParams()
  const title = schools[parseInt(i)].levels[parseInt(idx)].name + schools[parseInt(i)].levels[parseInt(idx)].classes[id];
  const classe = schools[parseInt(i)].levels[parseInt(idx)].content
  return (
    <div className='mx-4  md:mx-8 lg:mx-10'>
        <h1 className='text-center text-3xl font-bold text-blue-900 my-4'>
         {title}
        </h1><hr/>
        <h3 className='mt-4 font-bold text-center text-[24px]'> Liste des cours </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between gap-3 mt-4 md:mt-6'>
            {
              classe.courses.map((course,index) =>(
                <div key={index}>
                  <Link to={`/school/${i}/level/${idx}/classe/${id}/course/${index}`}> 
                    <CourseCard course = {course}/>
                  </Link>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Classe