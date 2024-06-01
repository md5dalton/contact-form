import Image from "next/image"
import ErrorMsg from "./ErrorMsg"
import Fieldset from "./Fieldset"
import { gId } from "@/lib/functions"

export default ({ label }) => {
    
    const id = gId(label)
    
    return (
        <Fieldset>
            <label htmlFor={id} className="flex gap-4 items-center">
                <div
                    className="h-6 w-6 border-2 rounded-sm border-grey-medium shrink-0 has-[:checked]:border-transparent">
                    <input id={id} className="hidden peer" type="checkbox" />
                    <Image
                        className="hidden peer-checked:block"
                        alt=""
                        height={24}
                        width={24}
                        src="/images/icon-checkbox-check.svg"
                    />
                </div>
                <div className="space-x-2">
                    <span>{label}</span>
                    <span className="text-green-medium">*</span>
                </div>
            </label>
            <ErrorMsg>This field is required</ErrorMsg>
        </Fieldset>
    )
}