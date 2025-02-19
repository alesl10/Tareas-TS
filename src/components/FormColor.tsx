
interface FormColorProps {
    id: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
    label: string;
    value?: string;
}

const FormColor = ({ onChange, id, label, value }: FormColorProps) => {

    return (
        <div >
            <label className="text-sm" htmlFor={id}>{label}</label>
            <div className=" flex h-[30px] w-[100px] relative border-2 border-gray-500 overflow-hidden bg-white/10 text-[0.8rem]">
                {value}
                <input
                    className="inputColor"
                    type="color"
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange} />
            </div>
        </div>
    )
}

export default FormColor