import { useEffect, useState } from "react"
import type { Tarea as TareaType } from "../types"

export const useTarea = () => {
    const [tareas, setTareas] = useState<TareaType[]>(() => {
        const storedTareas = localStorage.getItem('tareas')
        return storedTareas ? JSON.parse(storedTareas) : []
    })
    const [filter, setFilter] = useState<'all' | 'completas' | 'incompletas'>('all')

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }, [tareas])

    const filteredTareas = tareas.filter(t => {
        if (filter === 'completas') return t.completada
        if (filter === 'incompletas') return !t.completada
        return true
    })

    const taskCompleted = tareas.filter(t => !t.completada)

    //logica para las tareas
    const crearNuevaTarea = (tarea: TareaType) => {
        setTareas([...tareas, tarea])
    }

    const handleCompleteTask = (id: string, completada: boolean) => {
        const newTareas = tareas.map(t => {
            if (t.id == id) {
                return {
                    ...t,
                    completada: !completada
                }
            }
            return t
        })
        setTareas(newTareas)
    };

    const deleteTask = (id: string) => {
        const newTareas = tareas.filter(t => t.id != id)
        // console.log(newTareas)
        setTareas(newTareas)
    }

    const deleteAllTask = () => {
        const tareasIncompletas = tareas.filter(tarea => !tarea.completada)
        setTareas(tareasIncompletas)
    }

    const filterTareas = (filter: 'all' | 'completas' | 'incompletas') => {
        setFilter(filter)
    }

    const editTarea = (id: TareaType['id'], title: string) => {

        const newTareas = tareas.map(t => {
            if (t.id == id) {
                return {
                    ...t,
                    tarea: title
                }
            }
            return t
        })
        setTareas(newTareas)

    }
    return {
        crearNuevaTarea,
        handleCompleteTask,
        deleteTask,
        deleteAllTask,
        filterTareas,
        editTarea,
        filteredTareas,
        taskCompleted,
        setTareas
    }
}

