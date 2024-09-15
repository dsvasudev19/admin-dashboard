import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
});

export default function Register() {
  return (
    <div className="flex justify-center align-middle items-center h-screen">
      <div>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ touched, errors }) => (
                <Form>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Field
                          as={Input}
                          id="firstName"
                          name="firstName"
                          placeholder="Max"
                        />
                        {touched.firstName && errors.firstName && (
                          <ErrorMessage
                            component="div"
                            name="firstName"
                            className="text-red-500 text-sm"
                          />
                        )}
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Field
                          as={Input}
                          id="lastName"
                          name="lastName"
                          placeholder="Robinson"
                        />
                        {touched.lastName && errors.lastName && (
                          <ErrorMessage
                            component="div"
                            name="lastName"
                            className="text-red-500 text-sm"
                          />
                        )}
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="m@example.com"
                      />
                      {touched.email && errors.email && (
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="text-red-500 text-sm"
                        />
                      )}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                      />
                      {touched.password && errors.password && (
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="text-red-500 text-sm"
                        />
                      )}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Field
                        as={Input}
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                      />
                      {touched.confirmPassword && errors.confirmPassword && (
                        <ErrorMessage
                          component="div"
                          name="confirmPassword"
                          className="text-red-500 text-sm"
                        />
                      )}
                    </div>
                    <Button type="submit" className="w-full">
                      Create an account
                    </Button>
                    <Button variant="outline" className="w-full">
                      Sign up with GitHub
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="#" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
