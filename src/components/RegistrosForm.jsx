import { useState } from "react"

function RegistrosForm({onSubmit}) {
    const [tipocafe, setTipocafe] = useState('')
    const [tiempogerminacion, setTiempogerminacion] = useState('')
    const [tiemposiembra, setTiemposiembra] = useState('')
    const [tiempofruto, setTiempofruto] = useState('')
    const [aniosproducion, setAniosproducion] = useState('')

    const handleTipocafeChange = (event) => {
        setTipocafe(event.target.value)
    }
    const handleTiempogerminacionChange = (event) => {
        setTiempogerminacion(event.target.value)
    }
    const handleTiemposiembraChange = (event) => {
        setTiemposiembra(event.target.value)
    }
    const handleTiempofrutoChange = (event) => {
        setTiempofruto(event.target.value)
    }
    const handleAniosproducionChange = (event) => {
        setAniosproducion(event.target.value)
    }

    //Creacion de la funcion que va a enviar el formulario a la base de datos...

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({ tipocafe, tiempogerminacion, tiemposiembra, tiempofruto, aniosproducion })
        setTipocafe('')
        setTiempogerminacion('')
        setTiemposiembra('')
        setTiempofruto('')
        setAniosproducion('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Tipo cafe" value={tipocafe} onChange={handleTipocafeChange} required />
            <input type="text" placeholder="Tiempo germinacion" value={tiempogerminacion} onChange={handleTiempogerminacionChange} required />
            <input type="text" placeholder="Tiempo siembra " value={tiemposiembra} onChange={handleTiemposiembraChange} required />
            <input type="text" placeholder="Tiempo fruto " value={tiempofruto} onChange={handleTiempofrutoChange} required />
            <input type="text" placeholder="Años produccion " value={aniosproducion} onChange={handleAniosproducionChange} required />
            <button type="submit"> Guardar</button>

        </form>
    )

}

export default RegistrosForm