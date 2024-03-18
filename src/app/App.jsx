import CharacterPage from '../pages/CharacterPage/CharacterPage';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import styles from './App.module.scss'
import FavoritePage from '../pages/FavoritPage/FavoritePage';
import HomePage from '../pages/HomePage/HomePage';
import Favorite from '../components/Favorite';

function App() {
  return ( 
    <Router>
      <div>
      <div className={styles.nav_container}>
      <NavLink className={styles.nav_container} to='/'>Home</NavLink>
      <NavLink className={styles.nav_container} to='/character/?page=1'>Персонажи мультфильма</NavLink>
      <Favorite/>
      </div>
      
    <Routes>
      <Route path='/'  element={<HomePage HomePage={HomePage} />} />
      <Route path='/character'  element={<CharacterPage CharacterPage={CharacterPage} />} />
      <Route path='/favorites'  element={<FavoritePage FavoritePage={FavoritePage} />} />
    </Routes>
    </div>
    </Router>
  )
}
export default App;