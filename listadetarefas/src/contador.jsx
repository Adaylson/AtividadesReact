import { useState } from "react";

const Contador = () => {
    const[cont, setCont] = useState(0)

    function Adicionar(){
        const somar = cont + 1
        setCont(somar)
    }
    function Subtrair(){
        const sub = cont - 1
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
        </div>
    )
}

export default Contador;
