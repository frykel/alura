import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
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
      corPrimaria: '#DB6EBF',
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
  const inicial = [
      { nome: "Silvio Claudio Fernandes",
        cargo: "COO",
        imagem: "https://github.com/frykel.png",
        time: "Programação"
      },
      { nome: "Ismar Fernandes Sobrinho",
        cargo:  "CFO",
        imagem: "https://github.com/frykel.png",
        time: "Programação"
      },
      { nome: "Francimar Fernandes",
      cargo: "CEO",
      imagem: "https://github.com/frykel.png",
      time: "Programação"
    },
    { nome: "Silvio Claudio Fernandes",
        cargo: "COO",
        imagem: "https://github.com/frykel.png",
        time: "Front-End"
      },
      { nome: "Ismar Fernandes Sobrinho",
        cargo:  "CFO",
        imagem: "https://github.com/frykel.png",
        time: "Front-End"
      },
      { nome: "Francimar Fernandes",
      cargo: "CEO",
      imagem: "https://github.com/frykel.png",
      time: "Front-End"
    },
    { nome: "Silvio Claudio Fernandes",
        cargo: "COO",
        imagem: "https://github.com/frykel.png",
        time: "Data Science"
      },
      { nome: "Ismar Fernandes Sobrinho",
        cargo:  "CFO",
        imagem: "https://github.com/frykel.png",
        time: "Data Science"
      },
      { nome: "Francimar Fernandes",
      cargo: "CEO",
      imagem: "https://github.com/frykel.png",
      time: "Data Science"
    },
    { nome: "Silvio Claudio Fernandes",
        cargo: "COO",
        imagem: "https://github.com/frykel.png",
        time: "Devops"
      },
      { nome: "Ismar Fernandes Sobrinho",
        cargo:  "CFO",
        imagem: "https://github.com/frykel.png",
        time: "Devops"
      },
      { nome: "Francimar Fernandes",
      cargo: "CEO",
      imagem: "https://github.com/frykel.png",
      time: "Devops"
    },
    { nome: "Silvio Claudio Fernandes",
        cargo: "COO",
        imagem: "https://github.com/frykel.png",
        time: "UX e Design"
      },
      { nome: "Ismar Fernandes Sobrinho",
        cargo:  "CFO",
        imagem: "https://github.com/frykel.png",
        time: "UX e Design"
      },
      { nome: "Francimar Fernandes",
      cargo: "CEO",
      imagem: "https://github.com/frykel.png",
      time: "UX e Design"
    },
    { nome: "Silvio Claudio Fernandes",
        cargo: "COO",
        imagem: "https://github.com/frykel.png",
        time: "Mobile"
      },
      { nome: "Ismar Fernandes Sobrinho",
        cargo:  "CFO",
        imagem: "https://github.com/frykel.png",
        time: "Mobile"
      },
      { nome: "Francimar Fernandes",
      cargo: "CEO",
      imagem: "https://github.com/frykel.png",
      time: "Mobile"
    },
    { nome: "Silvio Claudio Fernandes",
        cargo: "COO",
        imagem: "https://github.com/frykel.png",
        time: "Inovação e Gestão"
      },
      { nome: "Ismar Fernandes Sobrinho",
        cargo:  "CFO",
        imagem: "https://github.com/frykel.png",
        time: "Inovação e Gestão"
      },
      { nome: "Francimar Fernandes",
      cargo: "CEO",
      imagem: "https://github.com/frykel.png",
      time: "Inovação e Gestão"
    }
  ]
  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }
  
  function deletarColaborador(){
    console.log("deletando colab")
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar = {deletarColaborador}
      />)}   
      <Rodape/>
    </div>
  );
}

export default App;
