import Image from "next/image"
import Fieldset from "./Fieldset"
import { Field } from "formik"

export default ({ label, name }) => (
    <Fieldset name={name}>
        <label htmlFor={name} className="flex gap-4 items-center">
            <div
                className="h-6 w-6 border-2 rounded-sm border-grey-medium shrink-0 has-[:checked]:border-transparent">
                <Field
                    id={name}
                    name={name}
                    className="hidden peer"
                    type="checkbox"
                />
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
    </Fieldset>
)