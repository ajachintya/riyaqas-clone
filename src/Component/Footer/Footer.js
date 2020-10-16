import React from 'react'
import photo from '../../assets/images/Screenshot (3fsd6).jpg'
import classes from './Footer.module.css'
import Neviagtion from "../Header/Navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";


export default function Footer() {
    return (
      <div className={classes.Footer}>
        <img src={photo} alt="logo"></img>
        <p style={{ color: "white" }}>
          Our support team will get assistance from AI-powered, making it
          quicker than ever to handle support requests.
        </p>
        <div className={classes.Nav}>
          <Neviagtion name="Product" />
          <Neviagtion name="Pricing" />
          <Neviagtion name="Our Story" />
          <Neviagtion name="SignIn" />
        </div>
        <div className={classes.Foot}>
          <div style={{ fontWeight: "700" }}>
            <spam style={{ color: "white" }}>
              &#169; Riyaqas 2020 All rights reserved, Powered with &nbsp;
            </spam>
            <FontAwesomeIcon style={{ color: "#B446FF" }} icon={faHeart} />{" "}
            &nbsp; <spam style={{ color: "white" }}>by</spam>{" "}
            <spam className={classes.Geek}>Codingeek.</spam>
          </div>
          <div className={classes.iconParent}>
            <spam className={classes.icon}>
              <i
                style={{ padding: "10px" }}
                className="fa fa-futbol-o"
                aria-hidden="true"
              ></i>
            </spam>
            &nbsp;&nbsp;
            <spam className={classes.icon}>
              <i
                style={{ padding: "10px" }}
                className="fa fa-facebook"
                aria-hidden="true"
              ></i>
            </spam>
            &nbsp;&nbsp;
            <spam className={classes.icon}>
              <i
                style={{ padding: "10px" }}
                className="fa fa-instagram"
                aria-hidden="true"
              ></i>
            </spam>
            &nbsp;&nbsp;
            <spam className={classes.icon}>
              <i
                style={{ padding: "10px" }}
                className="fa fa-twitter"
                aria-hidden="true"
              ></i>
            </spam>
            &nbsp;&nbsp;
            <spam className={classes.icon}>
              <i
                style={{ padding: "10px" }}
                className="fa fa-linkedin"
                aria-hidden="true"
              ></i>
            </spam>
          </div>
        </div>
      </div>
    );
}
