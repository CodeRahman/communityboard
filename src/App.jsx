import './App.css';
import Board from './components/Board'

const App = () => {

  return (
    <div className="App">
      <img className="usmlogo"src='https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/southernmiss.com/images/nextgen_2023/main_nav_logo.svg'></img>
      <p className='pagename'>Southern Miss Games</p>
      <div className='boardcomponent'>

        <Board image='https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsouthernmiss.com%2Fimages%2F2024%2F9%2F21%2FDDD09847.jpg&width=1920&height=1080&type=webp' 
        gamename='vs South Alabama' sport="Women's Soccer" date="6pm, Sep 26, 2024" links="https://southernmiss.com/sports/womens-soccer" />

        <Board image='https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsouthernmiss.com%2Fimages%2F2024%2F9%2F20%2F9.19atState_Website_2.jpg&width=1920&height=1080&type=webp' 
        gamename='vs ULM' sport="Women's Volleyball" date="6pm, Sep 27, 2024" links="https://southernmiss.com/sports/womens-volleyball" />
      
        <Board image='https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsouthernmiss.com%2Fimages%2F2024%2F9%2F18%2FIMG_0753.jpg&width=1024&height=683&type=webp' 
        gamename='vs ULM' sport="Women's Volleyball" date="2pm, Sep 28, 2024" links="https://southernmiss.com/sports/womens-volleyball" />

        <Board image='https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsouthernmiss.com%2Fimages%2F2024%2F9%2F17%2FDDD02169.jpg&width=1024&height=683&type=webp' 
        gamename='vs Texax State' sport="Women's Soccer(Free)" date="1pm, Sep 29, 2024" links="https://southernmiss.com/sports/womens-soccer" />

        <Board image='https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsouthernmiss.com%2Fimages%2F2024%2F9%2F19%2FDDD09039.jpg&width=1024&height=683&type=webp' 
        gamename='vs Arkansas State' sport="Women's Volleyball" date="6pm, Oct 3, 2024" links="https://southernmiss.com/sports/womens-volleyball" />

        <Board image='https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsouthernmiss.com%2Fimages%2F2024%2F9%2F17%2F8_31_VBvsJacksonville_114.jpg&width=1024&height=683&type=webp' 
        gamename='vs Arkansa State' sport="Women's Volleyball" date="6pm, Oct 4, 2024" links="https://southernmiss.com/sports/womens-volleyball" />
        
        <Board image='https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsouthernmiss.com%2Fimages%2F2024%2F9%2F14%2F3P8A1108.jpg&width=1024&height=683&type=webp' 
        gamename='vs Louisiana Ragin Cajuns' sport="Men's Football" date="TBA, Oct 5, 2024" links="https://southernmiss.com/sports/football" />

        <Board image='https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsouthernmiss.com%2Fimages%2F2024%2F9%2F8%2F3P8A7600.jpg&width=1024&height=683&type=webp' 
        gamename='vs Coastal Carolina' sport="Women's Soccer(Free)" date="1pm, Oct 6, 2024" links="https://southernmiss.com/sports/womens-soccer" />

        <Board image='https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsouthernmiss.com%2Fimages%2F2024%2F9%2F6%2F6W8A8699.jpg&width=1024&height=683&type=webp' 
        gamename='vs Marshall' sport="Women's Soccer(Free)" date="4pm, Oct 10, 2024" links="https://southernmiss.com/sports/womens-soccer" />

        <Board image='https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsouthernmiss.com%2Fimages%2F2024%2F9%2F13%2F5K9A8805_gVnf6.JPEG&width=1024&height=683&type=webp' 
        gamename='vs Louisiana Ragin Cajuns' sport="Women's Volleyball" date="6pm, 0ct 10, 2024" links="https://southernmiss.com/sports/womens-volleyball" />
        
        <Board image='https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsouthernmiss.com%2Fimages%2F2024%2F9%2F12%2FDDD04025__2_.jpg&width=1024&height=683&type=webp' 
        gamename='vs Louisiana Ragin Cajuns' sport="Women's Volleyball" date="6pm, 0ct 11, 2024" links="https://southernmiss.com/sports/womens-volleyball" />

        <Board image='https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsouthernmiss.com%2Fimages%2F2024%2F9%2F7%2F0T0A0592.jpg&width=1024&height=683&type=webp' 
        gamename='vs ULM' sport="Men's Football" date="TBA, Oct 12, 2024" links="https://southernmiss.com/sports/football" />
      </div>

      
      
      
      
    </div>
  )
}

export default App
