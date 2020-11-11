import React, { useContext, useEffect } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { FormContext } from "../../context/FormContext";
import "./Profile.styles.css";

export default function Profile() {
  const { info } = useContext(FormContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {info.length ? (
        info.map((res) => {
          return <ProfileCard key={res.id} result={res} />;
        })
      ) : (
        <h1 className="no-info">There is no Information :(</h1>
      )}
    </div>
  );
}
