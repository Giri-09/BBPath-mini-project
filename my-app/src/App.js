import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import CSECoursesCard from './components/CSECoursesCard'
import PharmacyoursesCard from './components/PharmacyCoursesCard'
import PharmacyoursesPV from './components/PharmacyCoursesPV'
import PharmacyoursesMC from './components/PharmacyCoursesMC'
import PharmacyoursesCR from './components/PharmacyCoursesCR'
import CSECoursesProgrammming from './components/CSECoursesProgramming';
import Python from './components/Python';
import PythonChapter1 from './components/PythonChapter1';
import PythonChapter2 from './components/PythonChapter2';
import PythonChapter3 from './components/PythonChapter3';
import PythonChapter4 from './components/PythonChapter4';
import PythonChapter5 from './components/PythonChapter5';
import PythonChapter6 from './components/PythonChapter6';
import PythonChapter7 from './components/PythonChapter7';
import PythonChapter8 from './components/PythonChapter8';
import PythonChapter9 from './components/PythonChapter9';
import PythonChapter10 from './components/PythonChapter10';
import Java from './components/Java';
import C from './components/C';
import JavaScript from './components/JavaScript';
import Arrays from './components/Arrays';
import Strings from './components/Strings';
import LinkedList from './components/LinkedList';
import Stacks from './components/Stacks';
import Queue from './components/Queue';
import Tree from './components/Tree';
import Graph from './components/Graph';
import SearchingAlgorithms from './components/SearchingAlgorithms';
import SortingAlgorithms from './components/SortingAlgorithms';
import GreedyAlgorithms from './components/GreedyAlgorithms';
import DynamicProgramming from './components/DynamicProgramming';
import CSECoursesDSA from './components/CSECoursesDSA';
import CSECoursesDBMS from './components/CSECoursesDBMS';
import CSECoursesFED from './components/CSECoursesFED';
import CSECoursesBED from './components/CSECoursesBED';
import CSECoursesST from './components/CSECoursesST';
import LoginPage from './components/LoginPage'
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute'
import './App.css';
import { Stack } from 'react-bootstrap';

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
      <Route exact path="/cse-courses/programming/python" element={<Python />}/>
      <Route exact path="/cse-courses/programming/java" element={<Java />}/>
      <Route exact path="/cse-courses/programming/clan" element={<C />}/>
       <Route exact path="/cse-courses/programming/javaScript" element={<JavaScript />}/>
     

      <Route exact path="/cse-courses/dsa" element={<CSECoursesDSA />}/>
      <Route exact path="/cse-courses/dsa/arrays" element={<Arrays />}/>
      <Route exact path="/cse-courses/dsa/strings" element={<Strings />}/>
      <Route exact path="/cse-courses/dsa/linkedlist" element={<LinkedList />}/>
      <Route exact path="/cse-courses/dsa/stack" element={<Stacks />}/>
      <Route exact path="/cse-courses/dsa/queue" element={<Queue />}/>
      <Route exact path="/cse-courses/dsa/tree" element={<Tree />}/>
      <Route exact path="/cse-courses/dsa/graph" element={<Graph />}/>
      <Route exact path="/cse-courses/dsa/searching" element={<SearchingAlgorithms />}/>
      <Route exact path="/cse-courses/dsa/sorting" element={<GreedyAlgorithms />}/>
      <Route exact path="/cse-courses/dsa/greedy" element={<DynamicProgramming />}/>
      <Route exact path="/cse-courses/dsa/dp" element={<SortingAlgorithms />}/>
      <Route exact path="/cse-courses/dbms" element={<CSECoursesDBMS />}/>
      <Route exact path="/cse-courses/frontend" element={<CSECoursesFED />}/>
      <Route exact path="/cse-courses/backend" element={<CSECoursesBED />}/>
      <Route exact path="/cse-courses/st" element={<CSECoursesST />}/>
      <Route exact path="/cse-courses/programming/python/python-chapter-1" element={<PythonChapter1 />}/>
      <Route exact path="/cse-courses/programming/python/python-chapter-2" element={<PythonChapter2 />}/>
      <Route exact path="/cse-courses/programming/python/python-chapter-3" element={<PythonChapter3 />}/>
      <Route exact path="/cse-courses/programming/python/python-chapter-4" element={<PythonChapter4 />}/>
      <Route exact path="/cse-courses/programming/python/python-chapter-5" element={<PythonChapter5 />}/>
      <Route exact path="/cse-courses/programming/python/python-chapter-6" element={<PythonChapter6 />}/>
      <Route exact path="/cse-courses/programming/python/python-chapter-7" element={<PythonChapter7 />}/>
      <Route exact path="/cse-courses/programming/python/python-chapter-8" element={<PythonChapter8 />}/>
      <Route exact path="/cse-courses/programming/python/python-chapter-9" element={<PythonChapter9 />}/>
      <Route exact path="/cse-courses/programming/python/python-chapter-10" element={<PythonChapter10 />}/>
      <Route path="*" element={<NotFound />} />


    </Routes>
  </BrowserRouter>
);

export default App;
