import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Blogvalidator from "../services/Blogvalidator";
import Fullblog from "./Fullblog";
import ImageArray from "./ImagesData";
const API_URL = "http://localhost:2020";

function Cardschema(props) {
  let history = useHistory();
  //to send state to fullblog component
  const [state, setState] = useState({
    title: props.title,
    data: props.data,
    author: props.author,
    isAuthenticated: props.isAuthenticated,
    id: props.id,
    date: props.date,
    views: props.views,
    comments: props.comments,
  });

  useEffect(() => {
    //console.log(state);
  }, []);
  //handle Like and dislike function

  const handleClick = async (e) => {
    e.preventDefault();
    // console.log(state);
    history.push({
      pathname: "/fullblog",
      state,
    });
    console.log(state);
    await axios
      .post(
        `${API_URL}/api/incrementviews`,
        {
          id: state.id,
          views: state.views,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="col-md-4 col-lg-4 col-xl-3 col-sm-6 ">
      <div className="card shadow-lg " style={{ color: "#4bcbeb" }}>
        <img
          src={ImageArray[Math.floor(Math.random() * ImageArray.length)]}
          className="card-img-top"
          alt="Blog image"
          height="200rem"
          width="150rem"
        />
        <div className="card-body">
          <h4 className="card-title ">{props.title}</h4>

          {/* <div className="text-left">
            <div className="text-secondary">100 100</div>
          </div> */}
          <button
            className="btn btn-homepage m-1"
            onClick={(e) => handleClick(e)}
          >
            Read Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cardschema;
