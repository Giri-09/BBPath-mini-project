import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import CSECoursesCard from './components/CSECoursesCard'
import PharmacyoursesCard from './components/PharmacyCoursesCard'
import PharmacyoursesPV from './components/PharmacyCoursesPV'
import PharmacyoursesMC from './components/PharmacyCoursesMC'
import PharmacyoursesCR from './components/PharmacyCoursesCR'
import CSECoursesProgrammming from './components/CSECoursesProgramming';
import CSECoursesDSA from './components/CSECoursesDSA';
import CSECoursesDBMS from './components/CSECoursesDBMS';
import CSECoursesFED from './components/CSECoursesFED';
import CSECoursesBED from './components/CSECoursesBED';
import CSECoursesST from './components/CSECoursesST';
import LoginPage from './components/LoginPage'
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute'
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/cse-courses" element={<CSECoursesCard />} />
      <Route exact path="/pharmacy-courses" element={<PharmacyoursesCard />} />
      <Route exact path="/pharmacy-courses/pharmacovigilance" element={<PharmacyoursesPV />} />
      <Route exact path="/pharmacy-courses/medical-coding" element={<PharmacyoursesMC />} />
      <Route exact path="/pharmacy-courses/clinical-reasearch" element={<PharmacyoursesCR />} />
      <Route exact path="/cse-courses/programming" element={<CSECoursesProgrammming />}/>
      <Route exact path="/cse-courses/dsa" element={<CSECoursesDSA />}/>
      <Route exact path="/cse-courses/dbms" element={<CSECoursesDBMS />}/>
      <Route exact path="/cse-courses/frontend" element={<CSECoursesFED />}/>
      <Route exact path="/cse-courses/backend" element={<CSECoursesBED />}/>
      <Route exact path="/cse-courses/st" element={<CSECoursesST />}/>
      <Route path="*" element={<NotFound />} />


    </Routes>
  </BrowserRouter>
);

export default App;
