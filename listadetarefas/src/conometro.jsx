import { useEffect, useState } from "react"

const Conometro = () => {
    const [segundo, setSegundo] = useState(0);
    const [minuto, setMinuto] = useState(0);
    const [hora, setHora] = useState(0);
    const [inicio, setInicio] = useState(false);
    const [acao, setAcao] = useState('Iniciar')


    useEffect(() =>{
        let intervalo;

        if(inicio){
            intervalo = setInterval(() => {
                setSegundo(() => segundo + 1);
            }, 1000);
        }else {
            clearInterval(intervalo)
        }
        return () => clearInterval(intervalo);
    },[inicio])

    const cnm = () =>{
        if(inicio===false){
            setInicio(true)
            setAcao('Zerar')
        }else{
            setInicio(false)
            setAcao('iniciar')
            setSegundo(0)
            setMinuto(0)
            setHora(0)
        }
    }

    const pausa = () =>{
        setInicio(false)
    }

    useEffect(() =>{

        if(segundo===60){
            setMinuto(minuto+1)
            setSegundo(0)                                                                                                   
        }
        if(minuto===60){
            setHora(hora+1)
            setMinuto(0)
        } 

    }, [segundo, minuto, hora])

    return(
        <div>
            <div>
                <h1>Conômetro</h1>
                <div>
                    <span>{hora} : </span>
                    <span>{minuto} : </span>
                    <span>{segundo}</span>
                </div>
                <button onClick={cnm}>{acao}</button>
                <button onClick={pausa}>Pausar</button>
            </div>
        </div>
    )
}

export default Conometro;