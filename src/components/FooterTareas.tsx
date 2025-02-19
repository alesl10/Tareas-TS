import { useState } from "react"
import { UseColorContext } from "../context/ColorContext"

interface FooterProps {
    deleteAllTask: () => void
    cantidadTareas: number
    filterTareas: (filter: 'all' | 'completas' | 'incompletas') => void
}

const FooterTareas = ({ deleteAllTask, cantidadTareas, filterTareas }: FooterProps) => {
    const { primaryColor } = UseColorContext()
    const [activeFilter, setActiveFilter] = useState<string>("all")
    return (
        <div className="
        flex flex-col justify-between items-center gap-2 text-xs md:text-sm w-full
        md:flex-row" 
        style={{ color: primaryColor }}>
            <span>{cantidadTareas} Tareas pendientes </span>
            <div className="flex gap-1">

                <span className={`px-2 p-1 hover:saturate-150 rounded-md cursor-pointer active:bg-blue-200 hover:bg-gray-200 ${activeFilter == 'all' ? 'border-2 border-blue-400 shadow-sm shadow-blue-500' : ''}`} onClick={() => { filterTareas('all'); setActiveFilter('all') }}>Todas</span>
                <span className={`px-2 p-1 hover:saturate-150 rounded-md cursor-pointer active:bg-blue-200 hover:bg-gray-200 ${activeFilter == 'incompletas' ? 'border-2 border-blue-400 shadow-sm shadow-blue-500' : ''}`}  onClick={() => { filterTareas('incompletas'); setActiveFilter('incompletas') }}>Activas</span>
                <span className={`px-2 p-1 hover:saturate-150 rounded-md cursor-pointer active:bg-blue-200 hover:bg-gray-200 ${activeFilter == 'completas' ? 'border-2 border-blue-400 shadow-sm shadow-blue-500' : ''}`}  onClick={() => { filterTareas('completas'); setActiveFilter('completas') }}>
                    Completas
                </span>
            </div>
            <button className={`px-2 p-1 hover:saturate-150 rounded-md cursor-pointer bg-red-700 text-white`} onClick={deleteAllTask}>Borrar completas</button>
        </div>
    )
}

export default FooterTareas