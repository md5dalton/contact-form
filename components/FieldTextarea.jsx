import { gId } from "@/lib/functions"
import FieldText from "./FieldText"
import { Field } from "formik"

export default ({ label }) => (
    <FieldText label={label}>
        <Field
            component="textarea"
            name={gId(label)}
            className="outline-none border-[1px] border-grey-medium rounded-lg py-3 px-6 min-h-48"
        />
    </FieldText>
)