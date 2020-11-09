import React, { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";

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
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        type="text"
        name="name"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        type="email"
        name="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={phone}
        type="number"
        name="phone"
        required
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        value={dob}
        type="date"
        name="dob"
        required
        onChange={(e) => setDob(e.target.value)}
      />
      <input
        type="text"
        name="city"
        required
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        value={district}
        type="text"
        name="district"
        required
        onChange={(e) => setDistrict(e.target.value)}
      />
      <select onChange={(e) => setProvince(e.target.value)}>
        <option value="" selected disabled hidden>
          Choose here
        </option>
        <option value="Province No. 1">Province No. 1</option>
        <option value="Province No. 2">Province No. 2</option>
        <option value="Bagmati Province">Bagmati Province</option>
        <option value="Gandaki Province">Gandaki Province</option>
        <option value="Lumbini Province">Lumbini Province</option>
        <option value="Karnali Province"> Karnali Province</option>
        <option value="Sudurpashchim Province">Sudurpashchim Province</option>
      </select>
      <input
        value={country}
        type="text"
        name="country"
        required
        onChange={(e) => setCountry(e.target.value)}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
