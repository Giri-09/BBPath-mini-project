import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CSECoursesCard from './components/CSECoursesCard'
import PharmacyoursesCard from './components/PharmacyCoursesCard'
import NotFound from './components/NotFound';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/cse-courses" element={<CSECoursesCard />} />
      <Route exact path="/pharmacy-courses" element={<PharmacyoursesCard />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
);

export default App;
