import './App.css';
import Header from './components/Header';
import TrashTodo from './screens/TrashTodo';
import TodoApp from './screens/TodoApp';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginUser from './screens/LoginUser';
import SignupUser from './screens/SignupUser';
import LogoutUser from './components/LogoutUser';
function App() {
  console.log(process.env);
  return (
    <Router>
          <Header/>
          <Routes>
              <Route exact path='/' element={<TodoApp />} />
              <Route exact path='/user/login' element={<LoginUser />} />
              <Route exact path='/user/logout' element={<LogoutUser />} />
              <Route exact path='/user/signup' element={<SignupUser />} />
              <Route exact path='/trash' element={<TrashTodo />} />
              
            {/* <TodoApp/> */}
            {/* <TrashTodo/> */}
          </Routes>
    </Router>
  );
}

export default App;
