import './App.css';
import Board from './components/Board'

const App = () => {

  return (
    <div className="App">
      <img src='https://heroic-pixie-6d7f91.netlify.app/awning.png' className='topper'></img>
      <p className='pagename'>Food Truck Favorites</p>
      <div className='boardcomponent'>

        <Board image='https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg' 
        truckname='Birria-Landia' region='Mexican' menulink='https://birrialandia.com/'/>

        <Board image='https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42' 
        truckname='Mysttik Masala' region='Indian' menulink='https://indianfoodny.com/'/>
       
        <Board image='https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024' 
        truckname='The Halal Guys' region='Middle Eastern' menulink='https://thehalalguys.com/menu/'/>

        <Board image='https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg' 
        truckname='NY Dosas' region='Vegetarian' menulink='https://nydosas.com/menu/'/>

        <Board image='https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg' 
        truckname='Jerk Pan' region='Jamaican' menulink='https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/'/>

        <Board image='https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg' 
        truckname='Tong' region='Bangladeshi' menulink='https://www.facebook.com/Bangladeshistreetfoods/'/>

        <Board image='https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg' 
        truckname='King Souvlaki of Astori' region='Greek' menulink='https://kingsouvlakinyc.com/'/>
        
        <Board image='https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg' 
        truckname="Ling's Sweet Mini Cakes" region='Chinese' menulink='https://canalstreet.market/'/>
        
        <Board image='https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg' 
        truckname="Uncle Gussy's" region='Greek' menulink='https://unclegussys.com/menus/'/>

        <Board image='https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg' 
        truckname='Patacon Pisao' region='Venezuelan' menulink='https://www.pataconpisaonyc.com/menus/'/>

        <Board image='https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png' 
        truckname="Mom's Mono" region='Tibetan' menulink='https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/'/>

        <Board image='https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg' 
        truckname='Makina Cafe' region='Ethiopian' menulink='https://makinacafenyc.com/'/>
      
      </div>

      
      
      
      
    </div>
  )
}

export default App
