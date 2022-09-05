import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from './components/Dashboard';
import AddStudent from './projects/AddStudent';
import ShowStudents from './projects/ShowStudents';
import UpdateStudent from './projects/UpdateStudent';


function App() {
  return (
    <div className="App">
      

      <Router>
      <Dashboard/>
        <Routes>
          <Route exact path='/create' element={<AddStudent/>}/>
          <Route exact path='/show' element={<ShowStudents/>}/>
          <Route exact path='/update/:id' element={<UpdateStudent />}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
