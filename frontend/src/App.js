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
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
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
import Introduction from './components/Introduction';
import Explanation from './components/Explanation';
import Advantages from './components/Advantages';
import Characteristics from './components/Characteristics';
import Disadvantages from './components/Disadvantages';
import CSECoursesFED from './components/CSECoursesFED';
import HTML from './components/HTML';
import CSS from './components/CSS';
import JavaScript from './components/JavaScript';
import CSECoursesBED from './components/CSECoursesBED';
import CSECoursesST from './components/CSECoursesST';
import SoftwareTesting from './components/SoftwareTesting';
import TestCaseDesign from './components/TestCaseDesign';
import TestAutomation from './components/TestAutomation';
import TestManagement from './components/TestManagement';
import LevelsOfTesting from './components/LevelsOfTesting'; 
import PharmacyCoursesCRCard from './components/PharmacyCoursesCRCard';
import PharmacyCoursesMCCard from './components/PharmacyCoursesMCCard';
import PharmacyCoursesPVCard from './components/PharmacyCoursesPVCard';
import SQL from './components/SQL';
import MongoDB from './components/MongoDB';
import NodeJS from './components/NodeJS';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute'

import { Stack } from 'react-bootstrap';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
    <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<SignupPage />} />
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/contact-us" element={<ContactUs />} />
    <Route element={<ProtectedRoute />}>
    <Route exact path="/cse-courses" element={<CSECoursesCard />} />
      <Route exact path="/pharmacy-courses" element={<PharmacyoursesCard />} />
      <Route exact path="/pharmacy-courses/pharmacovigilance-card/pharmacovigilance" element={<PharmacyoursesPV />} />
      <Route exact path="/pharmacy-courses/pharmacovigilance-card" element={<PharmacyCoursesPVCard />} />
      <Route exact path="/pharmacy-courses/medical-coding-card" element={<PharmacyCoursesMCCard />} />
      <Route exact path="/pharmacy-courses/clinical-reasearch-card" element={<PharmacyCoursesCRCard />} />
      <Route exact path="/pharmacy-courses/medical-coding-card/medical-coding" element={<PharmacyoursesMC />} />
      <Route exact path="/pharmacy-courses/clinical-reasearch-card/clinical-reasearch" element={<PharmacyoursesCR />} />
      <Route exact path="/cse-courses/programming" element={<CSECoursesProgrammming />}/>
      <Route exact path="/cse-courses/programming/python" element={<Python />}/>
      <Route exact path="/cse-courses/programming/java" element={<Java />}/>
      <Route exact path="/cse-courses/programming/clan" element={<C />}/>
      <Route exact path="/cse-courses/dsa" element={<CSECoursesDSA />}/>
      <Route exact path="/cse-courses/dsa/arrays" element={<Arrays />}/>
      <Route exact path="/cse-courses/dsa/strings" element={<Strings />}/>
      <Route exact path="/cse-courses/dsa/linkedlist" element={<LinkedList />}/>
      <Route exact path="/cse-courses/dsa/stack" element={<Stacks />}/>
      <Route exact path="/cse-courses/dsa/queue" element={<Queue />}/>
      <Route exact path="/cse-courses/dsa/tree" element={<Tree />}/>
      <Route exact path="/cse-courses/dsa/graph" element={<Graph />}/>
      <Route exact path="/cse-courses/dsa/searching" element={<SearchingAlgorithms />}/>
      <Route exact path="/cse-courses/dsa/sorting" element={<SortingAlgorithms />}/>
      <Route exact path="/cse-courses/dsa/greedy" element={<GreedyAlgorithms />}/>
      <Route exact path="/cse-courses/dsa/dp" element={<DynamicProgramming />}/>
      <Route exact path="/cse-courses/dbms/intro" element={<Introduction />}/>
      <Route exact path="/cse-courses/dbms/explanation" element={<Explanation />}/>
      <Route exact path="/cse-courses/dbms/characteristics" element={<Characteristics />}/>
      <Route exact path="/cse-courses/dbms/advantages" element={<Advantages />}/>
      <Route exact path="/cse-courses/dbms/disadvantages" element={<Disadvantages/>}/>
      <Route exact path="/cse-courses/dbms" element={<CSECoursesDBMS />}/>
      <Route exact path="/cse-courses/frontend" element={<CSECoursesFED />}/>
      <Route exact path="/cse-courses/frontend/html" element={<HTML />}/>
      <Route exact path="/cse-courses/frontend/css" element={<CSS />}/>
      <Route exact path="/cse-courses/frontend/javascript" element={<JavaScript />}/>
      <Route exact path="/cse-courses/backend/sql" element={<SQL />}/>
      <Route exact path="/cse-courses/backend/mongodb" element={<MongoDB/>}/>
      <Route exact path="/cse-courses/backend/nodejs" element={<NodeJS />}/>
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
      <Route exact path="/cse-courses/st/testing" element={<SoftwareTesting />}/>
      <Route exact path="/cse-courses/st/levels" element={<LevelsOfTesting />}/>
      <Route exact path="/cse-courses/st/management" element={< TestManagement/>}/>
      <Route exact path="/cse-courses/st/testcasedesign" element={<TestCaseDesign/>}/>
      <Route exact path="/cse-courses/st/automation" element={<TestAutomation />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
      {/* 
      <Route exact path="/cse-courses" element={<CSECoursesCard />} />
      <Route exact path="/pharmacy-courses" element={<PharmacyoursesCard />} />
      <Route exact path="/pharmacy-courses/pharmacovigilance-card/pharmacovigilance" element={<PharmacyoursesPV />} />
      <Route exact path="/pharmacy-courses/pharmacovigilance-card" element={<PharmacyCoursesPVCard />} />
      <Route exact path="/pharmacy-courses/medical-coding-card" element={<PharmacyCoursesMCCard />} />
      <Route exact path="/pharmacy-courses/clinical-reasearch-card" element={<PharmacyCoursesCRCard />} />
      <Route exact path="/pharmacy-courses/medical-coding-card/medical-coding" element={<PharmacyoursesMC />} />
      <Route exact path="/pharmacy-courses/clinical-reasearch-card/clinical-reasearch" element={<PharmacyoursesCR />} />
      <Route exact path="/cse-courses/programming" element={<CSECoursesProgrammming />}/>
      <Route exact path="/cse-courses/programming/python" element={<Python />}/>
      <Route exact path="/cse-courses/programming/java" element={<Java />}/>
      <Route exact path="/cse-courses/programming/clan" element={<C />}/>
      <Route exact path="/cse-courses/dsa" element={<CSECoursesDSA />}/>
      <Route exact path="/cse-courses/dsa/arrays" element={<Arrays />}/>
      <Route exact path="/cse-courses/dsa/strings" element={<Strings />}/>
      <Route exact path="/cse-courses/dsa/linkedlist" element={<LinkedList />}/>
      <Route exact path="/cse-courses/dsa/stack" element={<Stacks />}/>
      <Route exact path="/cse-courses/dsa/queue" element={<Queue />}/>
      <Route exact path="/cse-courses/dsa/tree" element={<Tree />}/>
      <Route exact path="/cse-courses/dsa/graph" element={<Graph />}/>
      <Route exact path="/cse-courses/dsa/searching" element={<SearchingAlgorithms />}/>
      <Route exact path="/cse-courses/dsa/sorting" element={<SortingAlgorithms />}/>
      <Route exact path="/cse-courses/dsa/greedy" element={<GreedyAlgorithms />}/>
      <Route exact path="/cse-courses/dsa/dp" element={<DynamicProgramming />}/>
      <Route exact path="/cse-courses/dbms/intro" element={<Introduction />}/>
      <Route exact path="/cse-courses/dbms/explanation" element={<Explanation />}/>
      <Route exact path="/cse-courses/dbms/characteristics" element={<Characteristics />}/>
      <Route exact path="/cse-courses/dbms/advantages" element={<Advantages />}/>
      <Route exact path="/cse-courses/dbms/disadvantages" element={<Disadvantages/>}/>
      <Route exact path="/cse-courses/dbms" element={<CSECoursesDBMS />}/>
      <Route exact path="/cse-courses/frontend" element={<CSECoursesFED />}/>
      <Route exact path="/cse-courses/frontend/html" element={<HTML />}/>
      <Route exact path="/cse-courses/frontend/css" element={<CSS />}/>
      <Route exact path="/cse-courses/frontend/javascript" element={<JavaScript />}/>
      <Route exact path="/cse-courses/backend/sql" element={<SQL />}/>
      <Route exact path="/cse-courses/backend/mongodb" element={<MongoDB/>}/>
      <Route exact path="/cse-courses/backend/nodejs" element={<NodeJS />}/>
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
      <Route exact path="/cse-courses/st/testing" element={<SoftwareTesting />}/>
      <Route exact path="/cse-courses/st/levels" element={<LevelsOfTesting />}/>
      <Route exact path="/cse-courses/st/management" element={< TestManagement/>}/>
      <Route exact path="/cse-courses/st/testcasedesign" element={<TestCaseDesign/>}/>
      <Route exact path="/cse-courses/st/automation" element={<TestAutomation />}/>
       */}


    </Routes>
  </BrowserRouter>
);

export default App;
