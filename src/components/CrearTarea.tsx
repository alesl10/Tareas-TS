import { useForm, SubmitHandler } from "react-hook-form"
import type { Tarea as TareaType } from "../types"
import { UseColorContext } from "../context/ColorContext"

interface CrearTareaProps {
    crearNuevaTarea: (tarea: TareaType) => void
}

const CrearTarea = ({ crearNuevaTarea }: CrearTareaProps) => {
    const { primaryColor } = UseColorContext()
    const { register, handleSubmit, reset } = useForm<TareaType>()

    const onSubmit: SubmitHandler<TareaType> = data => {

        if (!data.tarea) return

        const newTarea = {
            id: crypto.randomUUID(),
            tarea: data.tarea,
            fecha: new Date(),
            completada: false
        }
        crearNuevaTarea(newTarea)
        reset()
    }
    return (
        // nueva tarea
        <form className="text-black w-full flex gap-2" onSubmit={handleSubmit(onSubmit)}>
            <input className=" bg-white grow p-2 md:border-2  md:border-gray-400 rounded-md shadow-md shadow-black md:focus:border-blue-400 md:focus:border-4" placeholder="Ingrese su tarea aqui..." {...register('tarea')} />
            <button className=" bg-white border-2 hover:bg-green-800 hover:text-white cursor-pointer transition shadow-md shadow-black duration-200 text-xl px-3 rounded-lg hover:saturate-150" style={{ borderColor: primaryColor }} type='submit'> + </button>
        </form>
    )
}

export default CrearTarea