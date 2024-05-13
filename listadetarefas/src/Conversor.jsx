import { useEffect, useState } from "react";

const ConversorMoeda = () =>{
    const [moedas, setMoedas] = useState([])
    const [demoedas, setDemoedas] = useState('USD')
    const [paramoedas, setParamoedas] = useState('EUR')
    const [quantidade, setQuantidade] = useState(1)
    const [resultado, setResultado] = useState(0)

    useEffect(() => { 

        fetch('https://api.exchangeratesapi.io/latest') 
    
          .then(response => response.json()) 
    
          .then(data => { 
    
            setMoedas([...Object.keys(data.rates)]); 
    
          }) 
    
        .catch(error => console.error('Erro ao buscar moedas:', error)); 
        console.log(error => console.error('Erro ao buscar moedas:', error))

    }, []); 

    const converterMoeda = () => {
        fetch(`https://api.exchangeratesapi.io/latest?base=${demoedas}&symbols=${paramoedas}`)
        .then(response => response.json())
        .then(data => {
            const taxaDeCambio = data.rates[paramoedas];
            setResultado(quantidade*taxaDeCambio)
        })
        .catch(error => console.error('Erro ao buscar moedas', error))
    } 


    

    return(
        <div>
            <div>
                <h1>Conversor de Moedas</h1>
                <div>
                    <label>De:</label>
                    <select value={demoedas} onChange={(e) => setDemoedas(e.target.value)} >
                        {moedas.map(moedas => (
                            <option value={moedas} key={moedas}>{moedas}</option>
                        ))}
                    </select>
                    <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)}/>
                </div>
                <div>
                    <label>Para:</label>
                    <select value={paramoedas} onChange={(e) => setParamoedas(e.target.value)}>
                        {moedas.map(moedas => (
                            <option value={moedas} key={moedas}>{moedas}</option>
                        ))}
                    </select>
                    <button onClick={converterMoeda}>Converter</button>
                </div>
                <div>
                    <h3>Resultado</h3>
                    <p>{resultado}</p>
                </div>
            </div>
        </div>
    )
}

export default ConversorMoeda;