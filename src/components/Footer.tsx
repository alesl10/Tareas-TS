import { UseColorContext } from "../context/ColorContext"



const Footer = () => {
    const { secondaryColor } = UseColorContext()
    return (
        <div className="text-xs md:text-sm flex flex-col" style={{ color: secondaryColor }}>
            <span>Doble click para editar Tarea</span>
            <span>- Creado por López Alexis - </span>
        </div>
    )
}

export default Footer