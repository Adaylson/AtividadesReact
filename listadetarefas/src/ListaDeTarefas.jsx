import { useState } from "react";

const ListaDeTarefas = () => {
    const [tarefa, setTarefa] = useState('')
    const [lista, setLista] = useState([])
    const [concluir, serConcluir] = useState([])

    function AdicionarLista(){
        if(tarefa !== ""){
        setLista([...lista, tarefa])
        setTarefa('')}
    }

    function MarcarConcluido(){

    }

    function DeletarFunção(index){

        const deletar = [...lista]
        deletar.splice(index,1)
        setLista(deletar)

    }
  

    //function texto(props){
    //    return <li>{props.nome} {props.data}</li>
    //}

    return(
        <div>
            <div>
                <h1>Lista de tarefas</h1>
                <div>
                    <div>Adicionar Tarefa</div>
                    <input type="text" placeholder="Nome da tarefa" value={tarefa} onChange={(e)=>setTarefa(e.target.value)}/>
                    <div>prazo</div>
                    <input type="datetime" />
                    <button onClick={AdicionarLista} > Adicionar </button>
                </div>
                <div>
                    <h2>Pendentes</h2>
                    {lista.map((lista, index) => (
                        <div>
                            <div>
                                <p>{lista}</p> 
                                <button>concluir</button>
                                <button onClick={() => DeletarFunção(index)}>Deletar</button>
                            </div> 
                        </div>                        
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListaDeTarefas;