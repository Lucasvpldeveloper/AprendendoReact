import Titulo from "./Titulo"

export default function App() {
  return (
    <>
    <div>
      <h1>Olá mundo!</h1>
      <Titulo cor="red" nome="Dimitri" paragrafo={false}/>
      <Titulo cor="blue" />
      <Titulo cor="purple" />
      <Titulo cor="orangered" />
    </div>
    </>
  )
}