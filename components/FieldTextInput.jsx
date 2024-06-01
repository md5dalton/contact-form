import { gId } from "@/lib/functions"
import FieldText from "./FieldText"

export default ({ label, type="text" }) => (
    <FieldText label={label}>
        <input
            name={gId(label)}
            type={type}
            className="outline-none border-[1px] border-grey-medium rounded-lg py-3 px-6"
        />
    </FieldText>
)