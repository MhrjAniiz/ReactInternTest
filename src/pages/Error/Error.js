import React from "react";
import { Button } from "@material-ui/core";
import "./Error.styles.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-body">
      <h1> Error page not found !!!</h1>
      <Button className="btn" variant="contained" color="primary">
        <Link className="link" to="/">
          Go to Home Page
        </Link>
      </Button>
    </div>
  );
}
