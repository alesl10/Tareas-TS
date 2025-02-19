import { UseColorContext } from '../context/ColorContext'

const Header = () => {
    const { primaryColor, titleColor } = UseColorContext()

    return (
        <div className=' w-full flex 
        flex-col items-center 
        md:justify-center md:flex-row 
        gap-2' style={{ backgroundColor: primaryColor }}>
            <img
                className='
                size-14
                md:size-20'
                src="/tareasIcon.png"
                alt="Icono tareas" />
            <h1
                className='
            text-5xl text-center
            md:text-6xl font-bold'
                style={{ color: titleColor }}>Mis Tareas
            </h1>

        </div>
    )
}

export default Header