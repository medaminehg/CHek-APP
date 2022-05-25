import React, { useEffect ,useState} from "react"
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar'
import UserRegister from "./Components/UserRegister";
import UserLogin from "./Components/UserLogin"
import UserProfile from "./Components/UserProfile"
import { useDispatch, useSelector } from "react-redux";
import { getProfile ,getfilm } from "./JS/actions/userAction";
import PrivateRoute from "./Components/PrivateRoute";
import Header from "./Components/Header"
import NewMovie from "./Components/NewMovie";
import MovisListe from "./Components/MovisListe";
import Descreption from "./Components/Descreption";
import ScrollTop from "./Components/ScrollTop";

function App() {

  const dispatch = useDispatch()
  
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const movies = useSelector(state => state.filmReducer.film)
  

  const [filmReate, setfilmReate]=useState(0)
  const [Movisname, setMovisname]=useState("")
  const add=(x) =>{
    setfilmReate(x)
  }
  function addch(ch) {
    setMovisname(ch)
  }

  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
  }

  useEffect(() => {
    dispatch(getProfile())
  }, [isAuth])
  useEffect(() => {
    dispatch(getfilm())
  }, [])
    const newfilm = movies.length
  return (
    <div className="App">
      <Header add={add} addch={addch} />
      {/* <NavBar /> */}
      
      <div className="auth-wrapper" >
        <Routes>
        <Route path='/' element={<div>
          <ScrollTop/>
          <NewMovie movies={movies[ movies.length-1]} />
        <MovisListe movies={movies.sort(dynamicSort("rating")).filter(el => filmReate <= el.rating).filter(v =>v.FilmName.toUpperCase().includes(Movisname.toUpperCase().trim()))}/>
        </div>} />
          <Route path='/register' element={<UserRegister />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/profile' element={<PrivateRoute component={UserProfile} />} />
          <Route path='/users/profile/:FilmName' element={<div>
        <Descreption  movies={movies}/>
      </div>} />
      <Route path='/serch' element={<div className="serch">
        
        
<ScrollTop/>
      <h1 className='serch'>Top Rating</h1>
      <MovisListe movies={movies.sort(dynamicSort("rating")).filter(el => filmReate <= el.rating).filter(v =>v.FilmName.toUpperCase().includes(Movisname.toUpperCase().trim()))}/>
     
      </div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
