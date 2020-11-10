import React, { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import SingleTableData from "./SingleTableData";
import "./tabledata.styles.css";

const TableDataList = () => {
  const { info } = useContext(FormContext);
  const [sortType, setSortType] = useState("asc");

  const sorted = info.sort((a, b) => {
    const isReversed = sortType === "asc" ? 1 : -1;
    return isReversed * a.name.localeCompare(b.name);
  });
  return (
    <div className="table-container">
      {info.length ? (
        <table className="table-body">
          <tr>
            <th>Name (asc)</th>
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
