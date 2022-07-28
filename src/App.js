import './App.css';
import { useState } from 'react';
import FormularioCadastro from './FormularioCadastro';
import TabelaUsers from './TabelaUsers';

function App() {
  const [dadosUser, setDadosUser] = useState();
  return (
    <>
    
      <FormularioCadastro aoEnviar={(dados) =>{
         setDadosUser(dados);
         console.log(dadosUser);
      }} 
      />
      <TabelaUsers {...dadosUser} />
    </>
    
    
    
  )
}

export default App;
