import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";

const SingleTableData = ({ result }) => {
  const { removeInfo } = useContext(FormContext);
  return (
    <div>
      <p>{result.name}</p>
      <p>{result.email}</p>
      <p>{result.phone}</p>
      <p>{result.district}</p>
      <p>{result.province}</p>
      <p>{result.country}</p>
      <p>{result.dob}</p>
      <p>{result.id}</p>
    </div>
  );
};

export default SingleTableData;
