import { Tarea as TareaType } from "../types"
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { UseColorContext } from "../context/ColorContext";
import { useState } from "react";



interface TareaProps {
    tarea: TareaType
    deleteTask: (id: string) => void
    handleCompleteTask: (id: string, completada: boolean) => void
    editTarea: (id: TareaType['id'], title: string) => void
}


const Tarea = ({ tarea, deleteTask, handleCompleteTask, editTarea }: TareaProps) => {
    const { primaryColor } = UseColorContext()
    const [editTitle, setEditTitle] = useState(tarea.tarea)
    const [isEdit, setIsEdit] = useState(false)

    const handleEdit = () => {
        if (tarea.completada) return
        setIsEdit(true)
    }

    const handleSave = () => {
        if (tarea.tarea != editTitle) {
            editTarea(tarea.id, editTitle)
        }
        setIsEdit(false)
    }

    return (
        <div
            className={`relative flex w-full gap-2 border-b-2 border-gray-300 group items-center ${tarea.completada ? 'line-through decoration-green-600 decoration-[3px]' : ''}`}
            style={{ color: primaryColor }}
            key={tarea.id}
            onDoubleClick={handleEdit} >
            {
                tarea.completada ? (
                    <IoMdCheckmarkCircleOutline
                        className="flex-shrink-0 size-6 cursor-pointer text-green-700"
                        onClick={() => handleCompleteTask(tarea.id, tarea.completada)}
                    />
                ) : (
                    <MdOutlineRadioButtonUnchecked
                        className="flex-shrink-0 size-6 cursor-pointer text-green-700"
                        onClick={() => handleCompleteTask(tarea.id, tarea.completada)}
                    />
                )
            }
            {isEdit ? (
                <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    onBlur={handleSave}
                    onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                    className="grow text-2xl break-words outline-none md:focus:border-2 md:focus:border-blue-600 md:focus:shadow md:focus:shadow-blue-400 px-1"
                    autoFocus
                />
            ) : (
                <span className="grow md:text-2xl break-words">
                    {tarea.tarea}
                </span>
            )}
            <FaTrashAlt
                className="flex-shrink-0 md:invisible group-hover:visible text-md md:text-2xl text-red-600 cursor-pointer group-hover:animate-wiggle-more group-hover:animate-infinite group-hover:animate-duration-300"
                onClick={() => deleteTask(tarea.id)}
            />

        </div>
    )
}

export default Tarea