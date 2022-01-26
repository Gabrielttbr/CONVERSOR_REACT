
import './App.css';

import Conversor from './componentes/Conversor';

function App() {
  return(
    <div className='container'>
    <h1 className='Title'> Conversor de moedas</h1>
    <div class="flex-container">
      <Conversor MoedaA="EUR" MoedaB="BRL" />
      <Conversor MoedaA="USD" MoedaB="BRL" />
      <Conversor MoedaA="BRL" MoedaB="EUR" />
      <Conversor MoedaA="BRL" MoedaB="USD" />
    </div>
    </div>

  );
}

export default App;
