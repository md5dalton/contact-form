import ErrorMsg from "@/components/ErrorMsg"
import Fieldset from "@/components/Fieldset"

export default () => (
    <section className="bg-white mx-4 my-8 rounded-2xl p-6 grid gap-10">
        <div className="grid gap-8">
            <h1 className="text-hd">Contact Us</h1>
            <div className="grid gap-6">
                <div>
                    <Fieldset>
                        <div className="grid gap-2">
                            <div className="space-x-2">
                                <label>First name</label>
                                <span className="text-green-medium">*</span>
                            </div>
                            <input className="outline-none border-[1px] border-grey-medium rounded-lg py-3 px-6" type="text" />
                        </div>
                        <ErrorMsg>This field is required</ErrorMsg>
                    </Fieldset>
                </div>
                <div>
                    <Fieldset>
                        <div className="space-y-2">
                            <legend className="space-x-2">
                                <span>Query Type</span>
                                <span className="text-green-medium">*</span>
                            </legend>
                            <div className="grid gap-4">
                                <div className="flex gap-4 px-6 py-3  border-[1px] border-grey-medium rounded-lg">
                                    <div className="h-6 w-6 border-2 rounded-full border-grey-medium shrink-0"></div>
                                    <label>Support Request</label>
                                    <input className="hidden" type="radio" />
                                </div>
                                <div className="flex gap-4 px-6 py-3  border-[1px] border-grey-medium rounded-lg">
                                    <div className="h-6 w-6 border-2 rounded-full border-grey-medium shrink-0"></div>
                                    <label>Query Type</label>
                                    <input className="hidden" type="radio" />
                                </div>
                            </div>
                        </div>
                        <ErrorMsg>This field is required</ErrorMsg>
                    </Fieldset>
                </div>
            </div>
        </div>
        <Fieldset>
            <div className="flex gap-4 items-center">
                <div className="h-6 w-6 border-2 rounded-sm border-grey-medium shrink-0"></div>
                <div className="space-x-2">
                    <label>I consent to being contacted by the team</label>
                    <span className="text-green-medium">*</span>
                </div>
                <input className="hidden" type="checkbox" />
            </div>
            <ErrorMsg>This field is required</ErrorMsg>
        </Fieldset>
        <button className="bg-green-medium text-white text-m-b py-4 rounded-lg">Submit</button>
    </section>
)