import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";
import moment from "moment";

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const nameRegex = /^[A-Za-z]/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [details, setDetails] = useState([

]); 
  const validateForm = () => {
    let valid = true;
    const newFormErrors = {};

    if (!formData.firstname) {
      newFormErrors.firstname = "First name is required";
      valid = false;
    }

    if (!formData.lastname) {
      newFormErrors.lastname = "Last name is required";
      valid = false;
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      newFormErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.password || !passwordRegex.test(formData.password)) {
      newFormErrors.password =
        "Password is required and should be at least 8 characters long, containing at least one uppercase letter, one lowercase letter, and one digit.";
      valid = false;
    }

    setFormErrors(newFormErrors);
    return valid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    validateField(name);
  };

  const validateField = (fieldName) => {
    const newFormErrors = { ...formErrors };

    switch (fieldName) {
      case "firstname":
        newFormErrors.firstname = formData.firstname && nameRegex.test(formData.firstname) ? "" : "First name is required";
        break;
      case "lastname":
        newFormErrors.lastname = formData.lastname && nameRegex.test(formData.lastname) ? "" : "Last name is required";
        break;
      case "email":
        newFormErrors.email = formData.email && emailRegex.test(formData.email) ? "" : "Invalid email format";
        break;
      case "password":
        newFormErrors.password = formData.password && passwordRegex.test(formData.password)
          ? ""
          : "Password is required and should be at least 8 characters long, containing at least one uppercase letter, one lowercase letter, and one digit.";
        break;
      default:
        break;
    }

    setFormErrors(newFormErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const currentDate = moment().format("YYYY-MM-DD");
      const currentTime = moment().format("HH:mm:ss A");
      const newFormData = {
        ...formData,
        createdAtDate: currentDate,
        createdAtTime: currentTime,
      };

      setDetails([...details, newFormData]);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname" style={{color :` ${formErrors.firstname ? "#d31515" : ""}`}}>First Name:</label>
            <input
              type="text"
              className={`form-control ${formErrors.firstname ? "is-invalid" : ""}`}
              id="firstname"
              name="firstname"
              required
              value={formData.firstname}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {formErrors.firstname && <div className="invalid-feedback">{formErrors.firstname}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="lastname"style={{color :` ${formErrors.lastname ? "#d31515" : ""}`}}>Last Name:</label>
            <input
              type="text"
              className={`form-control ${formErrors.lastname ? "is-invalid" : ""}`}
              id="lastname"
              name="lastname"
              required
              value={formData.lastname}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {formErrors.lastname && <div className="invalid-feedback">{formErrors.lastname}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email"style={{color :` ${formErrors.email ? "#d31515" : ""}`}}>Email:</label>
            <input
              type="email"
              className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password"style={{color :` ${formErrors.password ? "#d31515" : ""}`}}>Password:</label>
            <input
              type="password"
              className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      {details.length > 0 && (
        <div className="container-lg mt-5">
          <h2>Details Table</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Created Date</th>
                <th>Created Time</th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail,index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{detail.firstname}</td>
                  <td>{detail.lastname}</td>
                  <td>{detail.email}</td>
                  <td>{passwordRegex.test(detail.password)  ? "true" : "false"}</td>
                  <td>{detail.createdAtDate}</td>
                  <td>{detail.createdAtTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Form;
