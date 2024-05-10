import { useState } from "react";

const Contador = () => {
    const[cont, setCont] = useState(0)
    const[qtdCont, setQtdCont] = useState(1)
    const[qtdContD, setQtdContD] = useState(1)

    function Adicionar(){
        const somar = cont + qtdCont
        setCont(somar)
    }
    function Subtrair(){
        const sub = cont - qtdContD
        setCont(sub)
    }
    return(
        <div>
            <div>
                <h1>Contador</h1>
                <div>{cont}</div>
                <div>
                    <button onClick={Subtrair}>Subtrair</button>
                    <button onClick={Adicionar}>Adicionar</button>
                    <button onClick={()=>setCont(0)}>Zerar contador</button>
                </div>
            </div>
            <div>
                <h2>Configurações</h2>
                Quantidade a ser somada por click
                <input type="number" value={qtdCont} onChange={(e)=>setQtdCont(parseInt(e.target.value))}/><br />
                Quantidade a ser subtraida por click
                <input type="number" value={qtdContD} onChange={(e)=>setQtdContD(parseInt(e.target.value))}/>
            </div>
        </div>
    )
}

export default Contador;
