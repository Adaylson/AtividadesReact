import { useState } from "react"

const ListadeContatos = () => {
    const [contatos, setContatos] = useState([]);
    const [nome, setNome] = useState("");
    const [numeros, setNumeros] = useState("");

    const salvarContato = () =>{
        if(nome !==''&numeros!==''){
            setContatos([...contatos, {nome, numeros}])
            setNome('')
            setNumeros('')
        }
    }

    return(
        <div>
            <div>
                <h1>Lista de contatos</h1>
                <div>
                    <h3>Adicionar novo contato</h3>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do contato"/>
                    <input type="text" value={numeros} onChange={(e) => setNumeros(e.target.value)} placeholder="Numero do contato"/>

                    <button onClick={salvarContato}>Salvar</button>
                </div>

                <div>
                    <h3>Lista de contatos</h3>
                    {contatos.map((contato, index) => (
                        <div>
                            <p>Nome   : {contato.nome}</p>
                            <p>Numero :{contato.numeros}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListadeContatos;