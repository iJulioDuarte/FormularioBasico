import "./TabelaUsers.css"


const TabelaUsers = ({nome, sobrenome, cpf, promocoes, novidades, exibe}) =>{
    return(
        <div className={exibe === true ?  `dadosTabela` : `tabelaOculta`}>
            <ul className="dados">
                <li className="nome">Nome: {nome}</li>
                <li className="sobrenome">Sobrenome: {sobrenome}</li>
                <li className="cpf">CPF: {cpf} </li>
                <li className="promocoes">Promoções: {promocoes ? `Sim` : `Não`}</li>
                <li className="novidades">Novidades: {novidades ? `Sim` : `Não`}</li>
            </ul>
        </div>
    )
}

export default TabelaUsers