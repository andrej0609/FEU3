import './App.css';
import Header from './components/Header';
import ListItem from './components/Listitem';
import Portfolio from './components/portfolio';
import images from './components/List';

function App() {
  return (
    <>
      <Header />
      <Portfolio />
      <div className="Img1">
        <div className='woman2'>
          {images.map(image => (
            <ListItem imageUrl={image.url} text={image.text} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

