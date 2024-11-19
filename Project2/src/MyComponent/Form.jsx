import React, { useState } from "react";

function Form() {
  const initialValue = {
    firstName: "",
    lastName: "",
    Username: "",
    Password: "",
    City: "",
  };
  const [formValue, setFormValue] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <form className="row g-3 needs-validation container my-5">
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom01"
          name="firstName"
          value={formValue.firstName}
          onChange={handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom02"
          name="lastName"
          value={formValue.lastName}
          onChange={handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustomUsername" className="form-label">
          Username
        </label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">
            @
          </span>
          <input
            type="text"
            className="form-control"
            id="validationCustomUsername"
            name="Username"
            aria-describedby="inputGroupPrepend"
            value={formValue.Username}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
      </div>
      <div className="col-md-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="Password"
          value={formValue.Password}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom03" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          name="City"
          value={formValue.City}
          onChange={handleChange}
          required
        />
        <div className="invalid-feedback">Please provide a valid city.</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom04" className="form-label">
          State
        </label>
        <select className="form-select" id="validationCustom04" name="State" value={formValue.State} onChange={handleChange} required>
          <option value="" disabled>Choose...</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Kolkata</option>
          <option>Pune</option>
          <option>Bangalore</option>
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
}

export default Form;
