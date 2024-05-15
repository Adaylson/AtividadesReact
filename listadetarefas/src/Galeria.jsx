import images from './img/images.jpg';
const { useState } = require("react");

const Galeria = () =>{
    const [imagem, setImagem] = useState([images, images, images])

    const novaImagem = () =>{
        setImagem([...imagem, images])
    }
    
    return(
        <div>
            <div> 
                <h1>Galeria de imagens</h1>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                    {imagem.map((imagem, index) => (
                        <img key={index} src={imagem} alt={`imagem${index+1}`} style={{margin:'5px'}} />
                    ))}
                </div>
                <button onClick={novaImagem}>Adicionar Imagem</button>
            </div>
        </div>
    )
}

export default Galeria;