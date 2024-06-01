import ErrorMsg from "./ErrorMsg"
import Fieldset from "./Fieldset"

export default ({ label, children }) => (
    <Fieldset>
        <div className="grid gap-2">
            <div className="space-x-2">
                <label>{label}</label>
                <span className="text-green-medium">*</span>
            </div>
            {children}
        </div>
        <ErrorMsg>This field is required</ErrorMsg>
    </Fieldset>
)