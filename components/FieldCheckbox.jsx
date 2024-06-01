import ErrorMsg from "./ErrorMsg"
import Fieldset from "./Fieldset"

export default ({ label, children }) => (
    <Fieldset>
        <div className="flex gap-4 items-center">
            <div className="h-6 w-6 border-2 rounded-sm border-grey-medium shrink-0"></div>
            <div className="space-x-2">
                <label>{label}</label>
                <span className="text-green-medium">*</span>
            </div>
            <input className="hidden" type="checkbox" />
        </div>
        <ErrorMsg>This field is required</ErrorMsg>
    </Fieldset>
)