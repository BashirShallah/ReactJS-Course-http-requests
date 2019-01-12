import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

export default function UsersForm(props){
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required()
    });

    return <Formik 
        enableReinitialize={true}
        initialValues={props.values}
        onSubmit={props.onSubmit}
        validationSchema={schema}
        render={props=>{
            return <Form>
                <label>Name : </label>
                <Field name="name" />
                <ErrorMessage name="name" /><br/>

                <label>Email : </label>
                <Field name="email" />
                <ErrorMessage name="email" /><br/>

                <button type="submit">Send</button>
            </Form>
        }}
    />

}