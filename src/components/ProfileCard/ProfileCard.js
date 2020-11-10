import React, { useContext } from "react";
import { Card, CardContent, Avatar, Button } from "@material-ui/core";
import "./ProfileCard.styles.css";
import { FormContext } from "../../context/FormContext";
import { Link } from "react-router-dom";

export default function ProfileCard({ result }) {
  const { dispatch } = useContext(FormContext);
  return (
    <>
      <Card className="card">
        <CardContent className="card-content">
          <div className="avatar-body">
            <Avatar
              className="avatar"
              alt="dummy profile"
              src={`https://robohash.org/${result.id}`}
            />
          </div>

          <div className="details">
            <h1> {result.name}</h1>
            <h4>Email: {result.email}</h4>
            <h4>Date of Birth: {result.dob}</h4>
            <h4>Contact Number: {result.phone}</h4>
            <h4>City: {result.city}</h4>
            <h4>District: {result.district}</h4>
            <h4>Province: {result.province}</h4>
            <h4>Country: {result.country}</h4>
          </div>
          <div className="button-body">
            <Button className="btn" variant="contained" color="primary">
              <Link className="edit-link " to={`/edit/${result.id}`}>
                Edit
              </Link>
            </Button>
            <Button
              className="btn"
              onClick={() => dispatch({ type: "REMOVE_INFO", id: result.id })}
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
