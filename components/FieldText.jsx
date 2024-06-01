import { ErrorMessage } from "formik"
import ErrorMsg from "./ErrorMsg"
import Fieldset from "./Fieldset"
import { gId } from "@/lib/functions"

export default ({ label, children }) => (
    <Fieldset>
        <div className="grid gap-2">
            <div className="space-x-2">
                <label>{label}</label>
                <span className="text-green-medium">*</span>
            </div>
            {children}
        </div>
        <ErrorMessage className="text-red text-s" name={gId(label)} component="p" />
    </Fieldset>
)