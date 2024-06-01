import FieldCheckbox from "@/components/FieldCheckbox"
import FieldRadios from "@/components/FieldRadios"
import FieldTextInput from "@/components/FieldTextInput"
import FieldTextarea from "@/components/FieldTextarea"

export default () => (
    <section className="bg-white mx-4 my-8 rounded-2xl p-6 grid gap-10">
        <div className="grid gap-8">
            <h1 className="text-hd">Contact Us</h1>
            <div className="grid gap-6">
                <div className="grid gap-6">
                    <FieldTextInput label="First name" />
                    <FieldTextInput label="Last name" />
                </div>
                <div className="grid gap-6">
                    <FieldTextInput label="Email" type="email" />
                </div>
                <div>
                    <FieldRadios
                        legend="Query Type"
                        options={[
                            {label: "Support Request"},
                            {label: "Query Type"},
                        ]}
                    />
                </div>
                <div className="grid gap-6">
                    <FieldTextarea label="Message" />
                </div>
            </div>
        </div>
        <FieldCheckbox label="I consent to being contacted by the team" />
        <button className="bg-green-medium text-white text-m-b py-4 rounded-lg">Submit</button>
    </section>
)