export default function Titulo() {

    let nome = "Lucas Vinicius"
    const soma = 10 + 10; 
    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"

    return (
        <>
        <h1>Oi eu sou um {soma}</h1>
        <img width={100} src={urlImg} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ex molestiae similique autem quidem numquam nesciunt magni. Explicabo nam accusantium perspiciatis rerum voluptas, sed voluptatum unde eaque nobis temporibus necessitatibus!</p>
        </>
    )
}