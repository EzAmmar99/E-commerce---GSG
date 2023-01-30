import { useState } from "react";
import { NavLink } from "react-router-dom";
import FormHeading from "../FormHeading/FormHeading";
import Input from "../Input";
import {
  ErrorMessage,
  ErrorsList,
  FormBox,
  Switcher,
} from "../LoginForm/style";
import { Dflex, HR } from "./style";
import * as yup from "yup";

export default function SignUpForm() {
  const [Name, SetName] = useState("");
  const [Surname, SetSurname] = useState("");
  const [Email, Setemail] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Password, SetPassword] = useState("");
  const [ConfirmPassword, SetConfirmPassword] = useState("");
  const [checkbox, Setcheckbox] = useState(false);
  const [Errors, SetErrors] = useState([]);

  const schema = yup.object().shape({
    Name: yup.string().required("Name is required"),
    Surname: yup.string().required("Surname is required"),
    Email: yup.string().email().required("Email is required"),
    Phone: yup.string().required("Phone is required"),
    Password: yup.string().min(8).required("Password is required"),
    ConfirmPassword: yup
      .string()
      .min(8)
      .required("ConfirmPassword is required")
      .oneOf([yup.ref("Password"), null], "Password Must match"),
    checkbox: yup
      .boolean()
      .oneOf([true], "Select the checkbox")
      .required("checkbox is required"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    schema
      .validate(
        {
          Name,
          Surname,
          Email,
          Phone,
          Password,
          ConfirmPassword,
          checkbox,
        },
        { abortEarly: false }
      )
      .then(() => {
        console.log("valid");
        SetErrors([]);
      })
      .catch((e) => {
        SetErrors(e.errors);
      });
  };
  const handleChangeInput = (e, Tel) => {
    const { id, value } = e.target;
    if (id === "Name") {
      SetName(value);
    }
    if (id === "Surname") {
      SetSurname(value);
    }
    if (id === "Email") {
      Setemail(value);
    }
    if (id === "Phone") {
      SetPhone(Tel + value);
    }
    if (id === "Password") {
      SetPassword(value);
    }
    if (id === "ConfirmPassword") {
      SetConfirmPassword(value);
    }
  };

  const handleCheckbox = (e) => {
    Setcheckbox((prevstate) => !prevstate);
  };
  return (
    <FormBox onSubmit={handleSubmit}>
      <FormHeading name="Register" />

      <ErrorsList>
        {Errors.map((error, index) => {
          return <ErrorMessage key={index}>{error}</ErrorMessage>;
        })}
      </ErrorsList>

      <Dflex>
        <Input
          halfWidth={true}
          id="Name"
          label="Name"
          placeholder="Type here"
          type="text"
          HandleInputFunction={handleChangeInput}
          value={Name}
        />
        <Input
          halfWidth={true}
          id="Surname"
          label="Surname"
          placeholder="Type here"
          type="text"
          HandleInputFunction={handleChangeInput}
          value={Surname}
        />
      </Dflex>
      <Input
        id="Email"
        label="Your e-mail "
        placeholder="example@mail.com"
        type="text"
        HandleInputFunction={handleChangeInput}
        value={Email}
      />
      <Input
        id="Phone"
        label="Phone"
        placeholder="00-000-00-00"
        type="text"
        Select={true}
        value={Phone}
        HandleInputFunction={handleChangeInput}
      />
      <Input
        id="Password"
        label="Password"
        placeholder="At least 6 characters."
        type="password"
        value={Password}
        HandleInputFunction={handleChangeInput}
      />
      <Input
        id="ConfirmPassword"
        label="Confirm password"
        placeholder="Type here"
        type="password"
        value={ConfirmPassword}
        HandleInputFunction={handleChangeInput}
      />
      <Input IsSubmit={true} type="submit" value="Register now" />
      <Input
        id="checkbox"
        label="I agree with "
        IsCheckBox={true}
        terms={true}
        ChangeCheckboxState={handleCheckbox}
        checked={checkbox}
      />
      <HR></HR>
      <Switcher>
        Already have an accaunt?
        <NavLink to="/login" className="link">
          &nbsp;Login
        </NavLink>
      </Switcher>
    </FormBox>
  );
}
