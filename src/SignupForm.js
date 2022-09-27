import logo from "./babcock_logo.png";
import { useEffect, useState } from "react";
import React from "react";
import validation from "./validation";
import "./App.css";

const SignupForm = ({ submitForm }) => {
  const { values, setValues } = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, SetDataIsCorrect] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    SetDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  });

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="logo" alt="" />
      </div>

      <br></br>
      <div class="title">
        <h1>
          BABCOCK UNIVERSITY, ILISHAN-REMO, OGUN STATE, NIGERIA COLLEGE OF
          POSTGRADUATE STUDIES
        </h1>
      </div>

      <br></br>
      <h2>
        Babcock University in collaboration with Sabre Network Inc. and
        AlphaFirst Travel & Tourism Academy commence MBA programme in Airline &
        Travel Management
      </h2>

      <section>
        <div class="pure-u-1 pure-u-md-1-3">
          <p>
            Babcock University (Centre for Executive Development) in partnership
            with Sabre Network Inc. and AlphaFirst Travel & Tourism Academy
            (IATA Certified) commence Professional Masters programme (MBA) in
            Airline and Travels Management.
          </p>
        </div>
        <div class="pure-u-1 pure-u-md-1-3">
          <p>
            This programme will provide students with solid theoretical and
            empirical knowledge on Business Administration, General Environment
            of Travel & Tourism, Aviation Safety & Security, Essential of
            Airline Training and Technology, Fundamental of Airline Operations,
            amongst others.
          </p>
        </div>
      </section>

      <br></br>
      <div class="container">
        <label>Kindly fill your details below to proceed</label>
      </div>
      <br></br>
      <div className="your">
        <label className="label">
          Your Name <small class="compulsory">*</small>
        </label>
        <input
          className="input"
          name="data[BackcockRegistration][name]"
          type="text"
          tabindex="1"
          placeholder="Your Full Name"
          required="required"
          maxlength="255"
          id="BackcockRegistrationName"
          class="pure-u-23-24"
          value={values.YourName || ""}
          onChange={handleChange}
        />
        {errors.YourName && <p className="error">{errors.YourName}</p>}
      </div>
      <div className="email">
        <label className="label">
          Your Email<small class="compulsory">*</small>
        </label>
        <input
          className="input"
          type="email"
          name="data[BackcockRegistration][email]"
          class="pure-u-23-24"
          tabindex="1"
          placeholder="Your E-mail Address"
          required="required"
          maxlength="100"
          id="BackcockRegistrationEmail"
          value={values.email || ""}
          onChange={handleChange}
        />

        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="phone">
        <label className="label">
          Your Phone<small class="compulsory">*</small>
        </label>
        <input
          name="data[BackcockRegistration][phone]"
          className="input"
          type="phone"
          id="BackcockRegistrationPhone"
          required="required"
          maxlength="50"
          placeholder="Your Mobile Number"
          tabindex="1"
          class="pure-u-23-24"
          value={values.phone || ""}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>

      <button
        className="btn btn-base btn-icon btn-icon-right btn-icon-go"
        type="submit"
        onclick={handleFormSubmit}
      >
        <span>Submit Form</span>
      </button>
    </div>
  );
};


export default SignupForm;
