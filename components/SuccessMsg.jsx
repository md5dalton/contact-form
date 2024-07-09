import Image from "next/image"

export default () => (
    <div
        className=" bg-grey-darker text-white rounded-xl p-6 space-y-2">
        <div className="flex items-center gap-2">
            <Image
                alt=""
                height={20}
                width={20}
                src="/images/icon-success-check.svg"
            />
            <p className="text-m-b">Message Sent!</p>
        </div>
        <p>Thanks for completing the form. We’ll be in touch soon!</p>
    </div>
)