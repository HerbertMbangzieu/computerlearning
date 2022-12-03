import React from 'react'
import { Link } from 'react-router-dom'

const LevelCard = ({level, idx, id}) => {
  return (
    <div className='p-4 border-[1px] rounded'>
        <h1 className='text-xl text-indigo-900 font-bold mb-3'> {level.name} </h1><hr/>
        <div className='mt-3 flex flex-col'>
          {
            level.classes.map((classe, index) => (
              <Link to={`/school/${id}/level/${idx}/classe/${index}`} key={idx} className="bg-slate-700 hover:bg-slate-900 hover:-translate-y-1 shadow-md shadow-neutral-500 text-white font-semibold px-4 py-2 rounded-full text-center m-2">
                {level.name + classe}
              </Link>
            ))
          }
        </div>
    </div>
  )
}

export default LevelCard