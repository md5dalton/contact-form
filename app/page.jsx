"use client"

import FieldTextInput from "@/components/FieldTextInput"
import FieldCheckbox from "@/components/FieldCheckbox"
import FieldTextarea from "@/components/FieldTextarea"
import FieldRadios from "@/components/FieldRadios"
import { Toaster } from "react-hot-toast"
import { Form, Formik } from "formik"
import { msgSent } from "@/lib/toast"
import * as Yup from "yup"

export default () => (
    <Formik
        
        initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            querytype: "",
            message: "",
            consent: "",
        }}

        validationSchema={Yup.object({
            firstname: Yup.string()
                .max(15, "Must be 15 characters or less")
                .matches(
                    /^[a-zA-Z0-9]+$/,
                    "Cannot contain special characters or spaces"
                )
                .required("This field is required"),

            lastname: Yup.string()
                .max(15, "Must be 15 characters or less")
                .matches(
                    /^[a-zA-Z0-9]+$/,
                    "Cannot contain special characters or spaces"
                )
                .required("This field is required"),

            email: Yup.string()
                .email("Invalid email address")
                .required("This field is required"),

            querytype: Yup.string().required("This field is required"),
            message: Yup.string().required("This field is required"),
            consent: Yup.boolean().required("This field is required")
            
        })}
        
        onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {

                // console.log(values)

                msgSent()
    
                setSubmitting(false)

                resetForm()
    
            }, 400)
    
        }}
    >
        <Form
            className="grid gap-10 p-6 bg-white rounded-2xl md:p-10">
            <Toaster />
            <div className="grid gap-8">
                <h1 className="text-hd">Contact Us</h1>
                <div className="grid gap-6">
                    <div className="grid gap-6 md:grid-cols-2">
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
            <FieldCheckbox name="consent" label="I consent to being contacted by the team" />
            <button type="submit" className="bg-green-medium text-white text-m-b py-4 rounded-lg">Submit</button>
        </Form>
    </Formik>
)