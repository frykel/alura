
import { useState } from 'react';
import Banner from './componentes/Banner';
 //como o arquivo importado de Formulario  se chama index.js, não precisamos escrever o nome do arquivo, o vsc já identifica ele de forma automática
import Formulario from './componentes/Formulario';



function App() {
  const [colaboradores, setColaboradores] = useState([]) /*Nesse tipo de utilização do useState o React
  utiliza 2 variáveis, uma para leitura do elemento(colaboradores) e outra para alteração do elemento(setColaboradores)*/
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]) //esse método cria uma novo array com os dados dos outros
    //colaboradores (...colaboradores) e adiciona o novo (colaborador)
}
  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
