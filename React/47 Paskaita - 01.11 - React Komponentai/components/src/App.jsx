import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Header />
      <Portfolio />
      <div className="Img1">
        <div className='portfolioImg'>
          <Cards
            data={
              [
                {
                  url: 'https://cdn.costumewall.com/wp-content/uploads/2017/03/lois-griffin.jpg',
                  text: 'Lois Griffin'
                },
                {
                  url: 'https://pbs.twimg.com/media/CLiPGTSVAAAP6Vl.jpg',
                  text: 'Peter Griffin'
                },
                {
                  url: 'https://i.redd.it/anime-peter-griffin-or-sexy-stewie-griffin-v0-4fa1gz2d92x91.jpg?width=828&format=pjpg&auto=webp&s=09e17009ba5ff6daa3d13e0b059c7939a27e5d5b',
                  text: 'Stewie Griffin'
                }
              ]
            }
          />
        </div>
      </div>
      <div className="Img1">
        <div className='portfolioImg'>
          <Cards
            data={
              [
                {
                  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJj-luDs6Ilc4x3Awba28ZHOw9N4hrnf3GkecqslUH_AY2gGi6Or3Tkxrh_DEsst-MxY&usqp=CAU',
                  text: 'Brian Griffin'
                },
                {
                  url: 'https://i.imgflip.com/32imp6.png',
                  text: 'Meg Griffin'
                },
                {
                  url: 'https://i.ytimg.com/vi/kVVNkT8-980/maxresdefault.jpg',
                  text: 'Glen Quagmire'
                }
              ]
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;

