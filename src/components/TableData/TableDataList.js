import React, { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import SingleTableData from "./SingleTableData";
import "./tabledata.styles.css";

const TableDataList = () => {
  const { info } = useContext(FormContext);
  const [sortType, setSortType] = useState("");

  const sorted = info.sort((a, b) => {
    const isReversed = sortType === "asc" ? 1 : -1;
    return isReversed * a.name.localeCompare(b.name);
  });

  const handleAsc = () => {
    setSortType("asc");
  };
  const handleDesc = () => {
    setSortType("desc");
  };

  return (
    <div className="table-container">
      {info.length ? (
        <div>
          <table className="table-body">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>City</th>
              <th>District</th>
              <th>Province</th>
              <th>Country</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>

            {sorted.map((result) => {
              return <SingleTableData key={result.id} result={result} />;
            })}
          </table>
          <button className="asc-dsc" onClick={handleAsc}>
            Ascending order
          </button>
          <button className="asc-dsc" onClick={handleDesc}>
            Descending order
          </button>
        </div>
      ) : (
        <div>
          <h1 className="empty-message">
            There is no Information. Fill the form above to save your
            information.
          </h1>
        </div>
      )}
    </div>
  );
};

export default TableDataList;
