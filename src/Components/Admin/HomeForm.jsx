// import React from 'react'
// import { Form, Formik, Field, ErrorMessage } from 'formik'
// import axios from 'axios';
// import './homeForm.css';
// import * as Yup from 'yup';
// import SlideForm from './SlideForm';
// import WelcomeTextForm from './WelcomeTextForm';

// const HomeForm = () => {
//   return (
//     <div className="formContainer">
//       <h3 className="slideLabel">Welcome Text</h3>
//       <WelcomeTextForm />
//       <h3 className="slideLabel">Slide 1</h3>
//       <SlideForm />
//       <h3 className="slideLabel">Slide 2</h3>
//       <SlideForm />
//       <h3 className="slideLabel">Slide 3</h3>
//       <SlideForm />
//     </div>
//   )
// }

// export default HomeForm


import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import axios from 'axios';
import './homeForm.css';
import * as Yup from 'yup';
import SlideForm from './SlideForm';

const HomeForm = () => {
  const initialValues = {
    name: "prueba",
    logo: "data:image/png;base64,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",
    welcome_text: '',
    id: null
  }
  const validationSchema = Yup.object().shape({
    welcome_text: Yup.string().min(20).required(),
  })
  const fileUpLoadHandler = async (values) => {
    console.log(values);
    const res = await axios.post("http://ongapi.alkemy.org/api/organization", values)
    console.log(res);
  }
  return (
    <div className="formContainer"><Formik
      initialValues={initialValues}
      onSubmit={fileUpLoadHandler}
      validationSchema={validationSchema}
    >
      {(formProps) => (
        <Form>
          <h3 className="slideLabel">Welcome Text</h3>
          <label>Welcome text (min 20 character) </label>  <br />
          <Field as='textarea' id="inputWelcomeText" name="welcome_text" placeholder="(ex. Welcome text..)" /> <br />
          <ErrorMessage name="welcome_text" component="span" /><br />
          <button type='submit'>Submit Welcome Text</button>
          <h3 className="slideLabel">Slides</h3>
          <SlideForm />

        </Form>)}
    </Formik></div>

  )
}

export default HomeForm;
