
import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto'; //como o arquivo importado de CampoTexto se chama index.js, não precisamos escrever o nome do arquivo, o vsc já identifica ele de forma automática

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto/>
      
    </div>
  );
}

export default App;
