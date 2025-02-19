import { createContext, ReactNode, useContext, useEffect, useState } from "react"

export const ColorContext = createContext<{
    primaryColor: string;
    setPrimaryColor: (color: string) => void;
    secondaryColor: string;
    setSecondaryColor: (color: string) => void;
    titleColor: string
    setTitleColor: (color: string) => void;
}>({
    primaryColor: '#202020',
    setPrimaryColor: () => null,
    secondaryColor: '#000000',
    setSecondaryColor: () => null,
    titleColor: '#000000',
    setTitleColor: () => null
})

export const ColorProvider = ({ children }: { children: ReactNode }) => {
    const [primaryColor, setPrimaryColor] = useState(localStorage.getItem('primaryColor') || '#202020')
    const [secondaryColor, setSecondaryColor] = useState(localStorage.getItem('secondaryColor') || '#f4efef')
    const [titleColor, setTitleColor] = useState(localStorage.getItem('titleColor') || '#f1f41f')

    useEffect(() => {
        localStorage.setItem('primaryColor', primaryColor)
        localStorage.setItem('secondaryColor', secondaryColor)
        localStorage.setItem('titleColor', titleColor)
    }, [primaryColor, secondaryColor, titleColor])

    return (

        <ColorContext.Provider value={{ primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor, titleColor, setTitleColor }}>
            {children}
        </ColorContext.Provider>
    )
}

export const UseColorContext = () => {
    const context = useContext(ColorContext)
    if (!context) {
        throw new Error('UseColorContext must be used within a ColorProvider')
    }
    return context
}