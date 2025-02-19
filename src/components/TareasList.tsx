// import { SubmitHandler, useForm } from "react-hook-form";
import type { Tarea as TareaType } from "../types";
import Tarea from "./Tarea";

interface TareasProps {
    mockTareas: TareaType[]
    deleteTask: (id: string) => void
    handleCompleteTask: (id: string, completada: boolean) => void
    editTarea: (id: TareaType['id'], title: string) => void
}

const TareasList = ({ mockTareas, deleteTask, handleCompleteTask, editTarea }: TareasProps) => {

    return (
        <ul className=" w-full gap-2 flex flex-col">
            {mockTareas.map(t => (
                <Tarea
                    key={t.id}
                    tarea={t}
                    deleteTask={deleteTask}
                    handleCompleteTask={handleCompleteTask}
                    editTarea={editTarea}
                />
            )
            )}
        </ul>
    )
}

export default TareasList