import { useEffect, useRef, useState } from "react"
import FormColor from './components/FormColor'
import Header from "./components/Header"
import TareasList from "./components/TareasList"
import { UseColorContext } from "./context/ColorContext"
import CrearTarea from "./components/CrearTarea"
import FooterTareas from "./components/FooterTareas"
import Footer from "./components/Footer"
import { useTarea } from "./hooks/useTareas"

function App() {
  const { primaryColor, secondaryColor, titleColor, setPrimaryColor, setSecondaryColor, setTitleColor } = UseColorContext()
  const [viewColor, setViewColor] = useState(false)
  

  const {
    crearNuevaTarea,
    handleCompleteTask,
    deleteTask,
    deleteAllTask,
    filterTareas,
    editTarea,
    filteredTareas,
    taskCompleted,
  } = useTarea()

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setViewColor(false);
      }
    };

    if (viewColor) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [viewColor])




  return (
    <div className='w-screen h-screen flex flex-col 
    justify-center items-center p-2
    gap-5'
      style={{ background: `linear-gradient(180deg, ${primaryColor} 80%,rgb(35, 32, 32) )`, color: secondaryColor }}>
      <Header />
      <div className="flex flex-col  gap-4 mx-auto rounded-lg shadow-md shadow-white flex-wrap pb-2
      px-2 pt-2 w-full
      md:px-10 md:pt-10 md:w-[600px] "
        style={{ backgroundColor: secondaryColor }}>
        <CrearTarea
          crearNuevaTarea={crearNuevaTarea}
        />
        <TareasList
          mockTareas={filteredTareas}
          deleteTask={deleteTask}
          handleCompleteTask={handleCompleteTask}
          editTarea={editTarea} />

        <FooterTareas
          deleteAllTask={deleteAllTask}
          cantidadTareas={taskCompleted.length}
          filterTareas={filterTareas}
        />
      </div>
      <Footer
      />
      <div
        className=' flex gap-2  
            bottom-2 right-2 absolute
             md:right-3 md:top-6 
             transition-all duration-500
             '
        style={{ color: secondaryColor }}>
        <img src="/circulo-de-color.png" alt="circulo de color" className='size-10 md:size-14 cursor-pointer' onClick={() => setViewColor(!viewColor)} />
      </div>

      <div
        ref={modalRef}
        className={`bg-gray-100 border-2 text-black px-10 pt-10 rounded-md transition-all duration-500 absolute ${viewColor ? 'opacity-100 scale-100 ' : ' opacity-0 scale-0 pointer-events-none'}`}>
        <FormColor onChange={(e) => setPrimaryColor(e.target.value)} id={"Primary"} label={"Primario"} value={primaryColor} />
        <FormColor onChange={(e) => setSecondaryColor(e.target.value)} id={"Secondary"} label={"Secundario"} value={secondaryColor} />
        <FormColor onChange={(e) => setTitleColor(e.target.value)} id={"Title"} label={"Title"} value={titleColor} />
        <button className="px-2 py-1 mb-7 mt-3 rounded-md cursor-pointer hover:invert hover:border-2" style={{ backgroundColor: primaryColor, color: secondaryColor }} onClick={() => setViewColor(false)}>guardar</button>
      </div>
    </div>
  )
}

export default App
