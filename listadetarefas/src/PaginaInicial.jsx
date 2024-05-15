import { Link } from "react-router-dom";

function PaginaIncial(){

    return(
        <div>
            <div>
                <h1>Bem vindo ao treinamento React</h1>
                <h2>Aqui estão os projetos disponiveis:</h2>
                <Link to='/listadetarefas'>Lista de Tarefas</Link><br />
                <Link to='/contador'>Contador</Link><br />
                <Link to='/Relogio'>Relogio Digital</Link><br />
                <Link to='/ConversorDeMoeda'>Conversor de Moedas</Link><br />
                <Link to='/Galeria'>Galeria de Fotos</Link><br />
                <Link to='/listadecontatos'>Lista de contatos</Link><br />
                <Link to='/conometro'>Conômetro</Link>
                <Link to='/quiz'>Quiz de perguntas</Link>
                <Link to='/Calculadora'>Calculadora</Link>
            </div>
        </div>
    )
}

export default PaginaIncial;