import Image from "next/image"

export default ({ label, name }) => {

    const id = (`${name}-${label}`).toLowerCase().replaceAll(" ", "-")
    
    return (
        <label htmlFor={id} className="flex gap-4 px-6 py-3  border-[1px] border-grey-medium rounded-lg">
            <div 
                className="h-6 w-6 border-2 rounded-full border-grey-medium shrink-0 has-[:checked]:border-transparent">
                <input id={id} name={name} className="hidden peer" type="radio" />
                <Image
                    className="hidden peer-checked:block"
                    alt=""
                    height={24}
                    width={24}
                    src="/images/icon-radio-selected.svg"
                />
            </div>
            <p>{label}</p>
        </label>
    )
}