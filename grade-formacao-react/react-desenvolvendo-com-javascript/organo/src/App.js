
import { useState } from 'react';
import Banner from './componentes/Banner';
 //como o arquivo importado de Formulario  se chama index.js, não precisamos escrever o nome do arquivo, o vsc já identifica ele de forma automática
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';



function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C271',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]
  

  const [colaboradores, setColaboradores] = useState([]) /*Nesse tipo de utilização do useState o React
  utiliza 2 variáveis, uma para leitura do elemento(colaboradores) e outra para alteração do elemento(setColaboradores)*/
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]) //esse método cria uma novo array com os dados dos outros
    //colaboradores (...colaboradores) e adiciona o novo (colaborador)
    console.log(colaboradores)
}
  return (
    <div className="App">
      <Banner/>
      <Formulario times = {times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
      key = {time.nome} 
      nome = {time.nome} 
      corPrim = {time.corPrimaria} 
      corSec = {time.corSecundaria}
      colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  )
}

export default App;
