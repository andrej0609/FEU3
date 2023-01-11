import './App.css';
import Header from './components/Header';
import ListItem from './components/Listitem';
import Portfolio from './components/portfolio';


function App() {
  return (
    <>
      <Header />
      <Portfolio />
      <div className="Img1">
        <div className='woman2'>
          <ListItem imageUrl='https://cdn.costumewall.com/wp-content/uploads/2017/03/lois-griffin.jpg'
            text='Lois Griffin'
          />
          
        </div>
      </div>
      <div className="Img1">
        <div className='woman2'>
          <ListItem imageUrl='https://www.liveabout.com/thmb/APMQQFMHcHHnJyXnZntsFDu0RLo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/peter_2008_v2F_hires1-56a00f083df78cafda9fdcb6.jpg'
            text='Peter Griffin'
          />
        </div>
      </div>
    </>
  );
}

export default App;

