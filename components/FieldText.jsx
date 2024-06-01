import Fieldset from "./Fieldset"

export default ({ label, children }) => (
    <Fieldset name={label}>
        <div className="grid gap-2">
            <div className="space-x-2">
                <label>{label}</label>
                <span className="text-green-medium">*</span>
            </div>
            {children}
        </div>
    </Fieldset>
)