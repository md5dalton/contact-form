import FieldText from "./FieldText"

export default ({ label }) => (
    <FieldText label={label}>
        <textarea
            className="outline-none border-[1px] border-grey-medium rounded-lg py-3 px-6 min-h-48"
        />
    </FieldText>
)