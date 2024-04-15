import { Formik, Form, Field } from "formik"


export default function ContactForm () {
    const handleSubmit = (values, action) => {
console.log("handleSubmit",values);
action.resetForm();
    }
    return (
<Formik initialValues={{username:"", usernumber:""}} onSubmit={handleSubmit}>
<Form>
    <div>
        <label htmlFor="">Name</label>
        <Field type="text" name="username"></Field>
        <label htmlFor="">Number</label>
        <Field type="number" name="usernumber"></Field>
    </div>

</Form>
</Formik>
    )
}