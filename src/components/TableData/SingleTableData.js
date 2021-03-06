import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

const SingleTableData = ({ result }) => {
  const { dispatch } = useContext(FormContext);
  return (
    <tr>
      <td>{result.name}</td>
      <td>{result.email}</td>
      <td>{result.phone}</td>
      <td>{result.dob}</td>
      <td>{result.city}</td>
      <td>{result.district}</td>
      <td>{result.province}</td>
      <td>{result.country}</td>
      <td>
        <Link to={`/edit/${result.id}`}>
          <EditIcon className="edit" />
        </Link>
      </td>
      <td>
        <DeleteIcon
          className="delete"
          onClick={() => dispatch({ type: "REMOVE_INFO", id: result.id })}
        />
      </td>
    </tr>
  );
};

export default SingleTableData;
