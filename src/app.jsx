//Crear un componente en React

//function  NombreComponente() {
// un componente siempre retorna un valor
// un componente siempre se exporta
import Carusel from "./Carusel"
import Header from "./Header"
export default function App() {
    return (
        <div>
            <Header></Header>
            <Carusel></Carusel>
        </div>
    )
}