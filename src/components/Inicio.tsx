import { UseColorContext } from '../context/ColorContext'
import FormColor from './FormColor'

const Inicio = () => {
    const { primaryColor, secondaryColor, titleColor, setPrimaryColor, setSecondaryColor, setTitleColor } = UseColorContext()

    return (
        <div className='w-screen h-screen flex flex-col 
        justify-center items-center p-2 md:text-4xl
        gap-5'
            style={{ background: `linear-gradient(180deg, ${primaryColor} 80%,rgb(35, 32, 32) )`, color: secondaryColor }}>
                <h4>Bienvenido!</h4>
                <span>Elegi tus colores</span>
            <div
                className={` flex flex-col md:flex-row gap-4`}>
                <FormColor onChange={(e) => setPrimaryColor(e.target.value)} id={"Primary"} label={"Primario"} value={primaryColor} />
                <FormColor onChange={(e) => setSecondaryColor(e.target.value)} id={"Secondary"} label={"Secundario"} value={secondaryColor} />
                <FormColor onChange={(e) => setTitleColor(e.target.value)} id={"Title"} label={"Title"} value={titleColor} />
            </div>
            <button className='md:text-xl px-2 py-1 rounded-md hover:saturate-150 cursor-pointer'  style={{backgroundColor:secondaryColor, color:primaryColor}}><a href='/home'>Ir al inicio</a></button>
        </div>
    )
}

export default Inicio