import { useState } from "react";

const Calculadora = () =>{
    const [numeros, setNumeros] = useState('')
    const [numero, setNumero] = useState(0)
    const [armazenado, setArmazenado] = useState(0)
    const [sinal, setSinal] = useState('')


    const add = (n) => {
        setNumeros(numeros + n)
    }

    const mais = () => {
        setArmazenado(parseInt(numeros));
        setSinal('mais');
        setNumeros('')
    }

    const result = () => {
        if(sinal==='mais'){

        }
    }

    return(
        <div>
            <div>
                <h1>Calculadora</h1>
                <div>
                    <h3>{numeros}</h3>
                    <div>
                        <span onClick={() => {add(7)}}>7</span>
                        <span onClick={() => {add(8)}}>8</span>
                        <span onClick={() => {add(9)}}>9</span>
                    </div>
                    <div>
                        <span onClick={() => {add(4)}}>4</span>
                        <span onClick={() => {add(5)}}>5</span>
                        <span onClick={() => {add(6)}}>6</span>
                        <span onClick={() => {add(7)}}>-</span>
                    </div>
                    <div>
                        <span onClick={() => {add(1)}}>1</span>
                        <span onClick={() => {add(2)}}>2</span>
                        <span onClick={() => {add(3)}}>3</span>
                        <span onClick={mais}> + </span>
                    </div>
                    <div>
                        <span onClick={() => {add(7)}}>x</span>
                        <span onClick={() => {add(0)}}>0</span>
                        <span onClick={() => {add(7)}}>/</span>
                        <span onClick={() => {add(7)}}>=</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculadora;