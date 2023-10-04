import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginSchema = Yup.object().shape({
   email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
   password: Yup.string()
      .min(3, "Password must be at least 3 characters at minimum")
      .required("Password is required"),
});

export const Formulir = () => {
   const handleSubmit = async (data) => {
      try {
         const response = await axios.post(
            "http://localhost:2000/users/",
            data
         );
         console.log(response);
      } catch (err) {
         console.log(err);
      }
   };
   return (
      <div>
         <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values, action) => {
               handleSubmit(values);
               action.resetForm();
            }}>
            {(props) => {
               return (
                  <Form>
                     <div>
                        <label>Email :</label>
                        <Field
                           type="email"
                           name="email"
                           placeholder="input email..."
                        />
                        <ErrorMessage
                           component="div"
                           name="email"
                           style={{ color: "red" }}
                        />
                     </div>
                     <div>
                        <label>Password :</label>
                        <Field
                           type="password"
                           name="password"
                           placeholder="input password..."
                        />
                        <ErrorMessage
                           component="div"
                           name="password"
                           style={{ color: "red" }}
                        />
                     </div>
                     <button type="submit">Submit</button>
                  </Form>
               );
            }}
         </Formik>
      </div>
   );
};
