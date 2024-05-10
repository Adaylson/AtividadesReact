import { Link } from "react-router-dom";

function PaginaIncial(){

    return(
        <div>
            <div>
                <h1>Bem vindo ao treinamento React</h1>
                <h2>Aqui estão os projetos disponiveis:</h2>
                <Link to='/listadetarefas'>Lista de Tarefas</Link>
            </div>
        </div>
    )
}

export default PaginaIncial;