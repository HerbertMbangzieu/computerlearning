import React from 'react'
import { Link } from 'react-router-dom'
import { SchoolCard } from '../components'
import { schools } from '../data'

const Schools = () => {
  return (
    <div>
      <div>
      <h1 className='mt-24 text-2xl font-bold text-center text-slate-900 mb-5'>  Veuillez cliquer sur votre Etablissement </h1> <hr/>
    </div>
    <div>
    
    <div className='p-6 flex flex-col gap-[32px] md:grid md:grid-cols-3 md:gap-5 lg:grid-cols-4 w-full place-content-around'>
        {
            schools.map((school,idx)=>
            <Link to={`/school/${idx}`} key={idx}>
                <SchoolCard school={school}/>
            </Link>
            )
        }
    </div>
    </div>
    </div>
  )
}

export default Schools