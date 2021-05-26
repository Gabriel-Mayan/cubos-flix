import './App.css';

import Bag from './componentes/Bag/index';
import Banner from './componentes/Promo/index';
import Header from './componentes/Header/index';
import Filmes from './componentes/Movies/index';

export default function App() 
{
  
  return(
    <div className="App">      
      <Header />      
      
      <meio className = "conteudo">
        <Banner />
        <Filmes />
      </meio>
      
      <div className= "mochila">
        <Bag/>
      </div>
    </div>
  );
}
