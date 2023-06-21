import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CSECoursesCard from './components/CSECoursesCard'
import PharmacyoursesCard from './components/PharmacyCoursesCard'
import CSECoursesProgrammming from './components/CSECoursesProgramming';
import NotFound from './components/NotFound';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/cse-courses" element={<CSECoursesCard />} />
      <Route exact path="/pharmacy-courses" element={<PharmacyoursesCard />} />
      <Route exact path="/cse-courses/programming" element={<CSECoursesProgrammming />}/>
      <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
);

export default App;
