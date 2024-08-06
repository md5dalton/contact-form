import { gId } from "@/lib/functions"
import ErrorMsg from "./ErrorMsg"
import Fieldset from "./Fieldset"
import Radio from "./Radio"
import UList from "./UList"

export default ({ legend, options }) => (
    <Fieldset name={legend}>
        <div className="space-y-2">
            <legend className="space-x-2">
                <span>{legend}</span>
                <span className="text-green-medium">*</span>
            </legend>
            <UList
                className="grid gap-4 md:grid-cols-2"
                items={options}
                itemHandler={item => <Radio name={gId(legend)} {...item} />}
            />
        </div>
    </Fieldset>
)