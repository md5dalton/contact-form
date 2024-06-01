import { gId } from "@/lib/functions"
import { ErrorMessage } from "formik"

export default ({ children, name }) => (
    <fieldset className="grid gap-y-2">
    {/* <fieldset className="grid gap-y-2 grid-rows-[auto_24px]"> */}
        {children}
        <ErrorMessage className="text-red text-s" name={gId(name)} component="p" />
    </fieldset>
)