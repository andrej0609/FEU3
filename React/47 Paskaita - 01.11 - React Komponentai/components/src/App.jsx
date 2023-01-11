import './App.css';
import Header from './components/Header';
import List from './components/List';
import Portfolio from './components/portfolio';


function App() {
  return (
    <>
      <Header />
      <Portfolio />
      <div className="Img1">
        <div className='woman'>
          <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg" alt="" />
          <p>Ipsum Feugiat</p>
        </div>
        <div className='woman'>
          <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg" alt="" />
          <p>Ipsum Feugiat</p>
        </div>
        <div className='woman'>
          <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg" alt="" />
          <p>Ipsum Feugiat</p>
        </div>
      </div>
      <div className="Img1">
        <div className='woman'>
          <img src="https://cdn.costumewall.com/wp-content/uploads/2017/03/lois-griffin.jpg" alt="" />
          <p>Rhoncus Semper</p>
        </div>
        <div className='woman'>
          <img src="https://cdn.costumewall.com/wp-content/uploads/2017/03/lois-griffin.jpg" alt="" />
          <p>Rhoncus Semper</p>
        </div>
        <div className='woman'>
          <img src="https://cdn.costumewall.com/wp-content/uploads/2017/03/lois-griffin.jpg" alt="" />
          <p>Rhoncus Semper</p>
        </div>
      </div>
    </>
  );
}

export default App;
