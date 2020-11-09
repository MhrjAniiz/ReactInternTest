import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import SingleTableData from "./SingleTableData";

const TableDataList = () => {
  const { info } = useContext(FormContext);
  return (
    <div>
      {info.length ? (
        info.map((result) => {
          return <SingleTableData key={result.id} result={result} />;
        })
      ) : (
        <div> no info</div>
      )}
    </div>
  );
};

export default TableDataList;
