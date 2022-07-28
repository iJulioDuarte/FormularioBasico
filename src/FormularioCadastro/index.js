import { useState } from "react"
import "./FormularioCadastro.css"

const FormularioCadastro = ({aoEnviar}) =>{
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const [exibe, setExibe] = useState(true)
    //const [erros, setErros] = useState(false)
    return(
        <>
        <section className="boxForm">
            <form className="formulario"
            
            onSubmit={(event) => {
                event.preventDefault()
                if (cpf.length === 11 && (!isNaN(cpf))){
                    setExibe(true)
                    aoEnviar({nome, sobrenome, cpf, promocoes, novidades, exibe});
                }
                
            }}>
            <h1>Formulário</h1>    
                <div className="campos">
                    <input placeholder="Nome" type="text" 
                    value={nome}
                    onChange={(event) =>{
                        setNome(event.target.value)
                        }}/>

                    <input placeholder="Sobrenome" type="text" value={sobrenome}
                        onChange={(event) =>{
                        setSobrenome(event.target.value)
                        }}/>

                    <input placeholder="CPF" type="text" value={cpf}
                        onChange={(event, substr) =>{
                            let tempcpf = event.target.value
                            if (tempcpf >= 11) {
                                tempcpf = tempcpf.substr(0, 11)
                            }
                            
                            setCpf(tempcpf) 
                                                     
                        }}className={cpf.length <= 10 && cpf.length > 0 ? `error` : ` `}  />
                    <p className={cpf.length <= 10 && cpf.length > 0 ? `error` : `auxError`}> Cpf deve conter 11 dígitos</p>

                    
                </div>
                    <label>Promoções</label>
                    <input type="checkbox" checked={promocoes}  onChange={(event) =>{
                        setPromocoes(event.target.checked)
                    }}/>

                    <label>Novidades</label>
                    <input type="checkbox" checked={novidades}  onChange={(event) =>{
                        setNovidades(event.target.checked)}}/>
                <button type="submit"> Cadastrar</button>
            </form>

            
        </section> 
        </>
        
    ) 
}
export default FormularioCadastro