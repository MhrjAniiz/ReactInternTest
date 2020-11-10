import React, { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import "./Form.styles.css";

const Form = () => {
  const { dispatch } = useContext(FormContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_INFO",
      info: { name, email, phone, dob, city, district, province, country },
    });
    setName("");
    setEmail("");
    setPhone("");
    setDob("");
    setCity("");
    setCity("");
    setDistrict("");
    setProvince("");
    setCountry("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="col-75">
            <input
              value={name}
              type="text"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="col-75">
            {" "}
            <input
              value={email}
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="phone">
              Phone
            </label>
          </div>
          <div className="col-75">
            <input
              value={phone}
              type="number"
              name="phone"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="dob">
              Date of Birth
            </label>
          </div>
          <div className="col-75">
            <input
              value={dob}
              type="date"
              name="dob"
              required
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="city">
              City
            </label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="city"
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="district">
              District
            </label>
          </div>
          <div className="col-75">
            {" "}
            <input
              value={district}
              type="text"
              name="district"
              required
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="province">
              Province
            </label>
          </div>
          <div className="col-75">
            <select
              onChange={(e) => setProvince(e.target.value)}
              name="province"
            >
              <option value="" selected disabled hidden>
                Choose here
              </option>
              <option value="Province No. 1">Province No. 1</option>
              <option value="Province No. 2">Province No. 2</option>
              <option value="Bagmati Province">Bagmati Province</option>
              <option value="Gandaki Province">Gandaki Province</option>
              <option value="Lumbini Province">Lumbini Province</option>
              <option value="Karnali Province"> Karnali Province</option>
              <option value="Sudurpashchim Province">
                Sudurpashchim Province
              </option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label className="label"  htmlFor="country">
              Country
            </label>
          </div>
          <div className="col-75">
            <input
              value={country}
              type="text"
              name="country"
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
