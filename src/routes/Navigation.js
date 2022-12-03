import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Classe, Course, Home, School, Schools } from '../pages';
const Navigation = () => {
  return (
    <div>
        <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/schools' element={<Schools/>}/>
              <Route exact path='/school/:id' element={<School/>}/>
              <Route exact path='/school/:i/level/:idx/classe/:id' element={<Classe/>}/>
              <Route exact path='/school/:i/level/:idx/classe/:id/course/:ind' element={<Course/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Navigation