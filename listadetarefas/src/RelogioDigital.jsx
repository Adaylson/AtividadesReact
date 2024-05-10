import { useEffect, useState } from "react"

export default function Relogio(){
    const [msegundo, setMsegundo] = useState(0)
    const [segundo, setSegundo] = useState(0)
    const [Minuto, setMinuto] = useState(0)
    const [hora, setHora] = useState(0)
    const [dia, setDia] = useState(0)
    const [mes, setMes] = useState(0)
    const [ano, setAno] = useState(0)
    
    

    
    
    useEffect(() => {

        function AtualizarTempo(){
            const tempo = new Date();
            setMsegundo(tempo.getMilliseconds())  
            setSegundo(tempo.getSeconds())
            setMinuto(tempo.getMinutes())
            setHora(tempo.getHours())

            setAno(tempo.getFullYear())
            setMes(tempo.getMonth())
            setDia(tempo.getDay())
        }
        
        setTimeout(AtualizarTempo, 1)
    })

    return(
        <div>
            <div>
                <h1>Relógio Digital</h1>
                <p>{dia}/{mes}/{ano}</p>
                <p>{hora}:{Minuto}:{segundo}:{msegundo}</p>
            </div>
        </div>
    )
}