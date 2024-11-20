

export default function Titulo({nome, paragrafo, cor}) {
    return (
        <>
        <div>
            <h1 style={{color: cor}} >Oi eu sou {nome ? nome : "Fulano"}</h1>
            { paragrafo ? 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit enim qui provident! Quisquam asperiores dolor et consequatur debitis eum dolorum sit odit. Consequatur sit illo itaque distinctio incidunt, molestiae aspernatur!</p>
            :
            <p></p>
        }
        </div>
        </>
    )
}