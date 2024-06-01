import FieldText from "./FieldText"

export default ({ label, type="text" }) => (
    <FieldText label={label}>
        <input className="outline-none border-[1px] border-grey-medium rounded-lg py-3 px-6" type={type} />
    </FieldText>
)