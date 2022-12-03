import React from 'react';
import {FaSchool} from "react-icons/fa";

const SchoolCard = ({school}) => {
  return (
    <div className='w-full rounded border-[1px] p-4 group'>
        <div className='text-[102px] md:text-[204px] text-gray-400 flex justify-center items-center group-hover:text-slate-800'>
            <FaSchool />
        </div><hr/>
        <h1 className='text-[24px] text-center md:text-[18px] text-gray-600 font-bold group-hover:text-slate-800'> {school.name} </h1>
    </div>
  )
}

export default SchoolCard