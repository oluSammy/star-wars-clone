import { useState } from "react";
import loginStyles from "./login.styles";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Loader from "react-loader-spinner";

const Login = () => {
  const classes = loginStyles();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      history.push("/dashboard");
    }, 2500);
  };

  const initValues = {
    email: "",
    password: "",
  };

  // ^[0-9a-zA-Z]*[0-9][0-9a-zA-Z]*$
  // validating function using yup
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .matches(
        /^[0-9a-zA-Z]*[0-9][0-9a-zA-Z]*$/,
        "Must Contain letters and numbers"
      )
      .required("Required"),
  });

  return (
    <div className={classes.root}>
      <h2 className={classes.loginTitle}>
        Sign in to continue to <br /> your account.
      </h2>
      <Formik
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik: any) => (
          <Form>
            <div className={classes.inputWrapper}>
              <label className={classes.label}>Email Address</label>
              <Field
                type="email"
                className={classes.input}
                placeholder="Email Address"
                name="email"
              />
              <div className={classes.errorBox}>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={classes.errorMessage}
                />
              </div>
            </div>
            <div className={classes.inputWrapper}>
              <label className={classes.label}>Password</label>
              <Field
                type="password"
                className={classes.input}
                placeholder="Enter strong password"
                name="password"
              />
              <div className={classes.errorBox}>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={classes.errorMessage}
                />
              </div>
            </div>
            <Button
              variant="contained"
              disableElevation
              className={classes.loginBtn}
              type="submit"
              disabled={!formik.isValid}
            >
              {isLoading ? (
                <Loader
                  type="ThreeDots"
                  color="#FFFFFF"
                  height={20}
                  width={20}
                />
              ) : (
                "sign in"
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
