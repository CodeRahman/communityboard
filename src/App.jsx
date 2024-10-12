import './App.css';
import Board from './components/Board';
import gamesData from './components/games.json'; // Import the games.json file

const App = () => {

  return (
    <div className="App">
      <img className="usmlogo"src='https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/southernmiss.com/images/nextgen_2023/main_nav_logo.svg'></img>
      <p className='pagename'>Southern Miss Games</p>
      <Board games = {gamesData}/>
    </div>
  )
}

export default App
