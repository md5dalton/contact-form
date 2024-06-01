import ErrorMsg from "./ErrorMsg"
import Fieldset from "./Fieldset"
import Radio from "./Radio"
import UList from "./UList"

export default ({ legend, options }) => (
    <Fieldset>
        <div className="space-y-2">
            <legend className="space-x-2">
                <span>{legend}</span>
                <span className="text-green-medium">*</span>
            </legend>
            <UList
                className="grid gap-4"
                items={options}
                itemHandler={item => <Radio {...item} />}
            />
        </div>
        <ErrorMsg>This field is required</ErrorMsg>
    </Fieldset>
)