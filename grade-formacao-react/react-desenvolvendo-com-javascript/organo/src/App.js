
import Banner from './componentes/Banner';
 //como o arquivo importado de Formulario  se chama index.js, não precisamos escrever o nome do arquivo, o vsc já identifica ele de forma automática
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Formulario/>
    </div>
  );
}

export default App;
