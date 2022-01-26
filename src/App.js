
import './App.css';

import Conversor from './componentes/Conversor';

function App() {
  return(
    <div className='container'>
      <h1 className='Title'> Conversor de moedas</h1>
      <div class="flex-container">
        <Conversor MoedaA="EUR" MoedaB="BRL" />
      
      </div>
    </div>

  );
}

export default App;
