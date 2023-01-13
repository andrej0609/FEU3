import './App.css';
import Form from './components/Form';
import SingIn from './components/Singin';
import { useState } from 'react';

function App() {
  const [arPrisijunges, setArPrisijunges] = useState(false);
  return (
    <>
      {
        arPrisijunges ?
          "Prisijunges" :
          <SingIn
            prijungti={setArPrisijunges}
          />
      }
      <hr />
      <Form />
    </>
  );
}

export default App;
