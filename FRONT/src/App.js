
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Main from './components/Main';
import EmployeeForm from './components/EmployeeForm';
import UserDashBoard from './components/UserDashBoard';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <div className="App">
       
      <Routes>       
<Route path={'/'} element={<Login/>}/>
<Route path={'/sign'} element={<Signup/>}/>

<Route element={<PrivateRoutes/>}>

<Route path={'/home'} element={<Main child={<Home/>}/>}/>
<Route path={'/form'} element={<Main child={<EmployeeForm method="post" data={{name:'',designation:'',location:'',salary:''}}/>}/>}/>
{/* <Route path={'/userhome'} element={<Main child={<UserDashBoard/>}/>}/> */}
</Route>
     </Routes>
    </div>
  );
}

export default App;
