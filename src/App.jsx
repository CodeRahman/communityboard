import './App.css';
import Board from './components/Board'

const App = () => {

  return (
    <div className="App">
      <img className="usmlogo"src='https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/southernmiss.com/images/nextgen_2023/main_nav_logo.svg'></img>
      <p className='pagename'>Southern Miss Games</p>
      <Board/>
    </div>
  )
}

export default App
