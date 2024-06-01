import { gId } from "@/lib/functions"
import FieldText from "./FieldText"

export default ({ label }) => (
    <FieldText label={label}>
        <textarea
            name={gId(label)}
            className="outline-none border-[1px] border-grey-medium rounded-lg py-3 px-6 min-h-48"
        />
    </FieldText>
)