export default ({ label }) => (
    <div className="flex gap-4 px-6 py-3  border-[1px] border-grey-medium rounded-lg">
        <div className="h-6 w-6 border-2 rounded-full border-grey-medium shrink-0"></div>
        <label>{label}</label>
        <input className="hidden" type="radio" />
    </div>
)