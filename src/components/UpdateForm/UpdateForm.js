import React, { useEffect, useState, useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { useHistory } from "react-router-dom";

import "../Form/Form.styles.css";

const UpdateForm = (props) => {
  const { editUser, info } = useContext(FormContext);
  const [selectedInfo, setSelectedInfo] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    city: "",
    district: "",
    province: "",
    country: "",
  });

  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = info.find((user) => user.id === userId);
    setSelectedInfo(selectedUser);
  }, [currentUserId, info]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // editUser(selectedInfo);
    alert("successfully updated");
    history.push("/");
  };

  const handleChange = (e) => {
    setSelectedInfo({ ...selectedInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="container2">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label className="label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="col-75">
            <input
              value={selectedInfo.name}
              type="text"
              name="name"
              required
              onChange={handleChange}
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
              value={selectedInfo.email}
              type="email"
              name="email"
              required
              onChange={handleChange}
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
              value={selectedInfo.phone}
              type="number"
              name="phone"
              required
              onChange={handleChange}
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
              value={selectedInfo.dob}
              type="date"
              name="dob"
              required
              onChange={handleChange}
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
              value={selectedInfo.city}
              type="text"
              name="city"
              required
              onChange={handleChange}
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
              value={selectedInfo.district}
              type="text"
              name="district"
              required
              onChange={handleChange}
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
              onChange={handleChange}
              name="province"
              value={selectedInfo.province}
            >
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
            <label className="label" htmlFor="country">
              Country
            </label>
          </div>
          <div className="col-75">
            <input
              value={selectedInfo.country}
              type="text"
              name="country"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="update" />
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
