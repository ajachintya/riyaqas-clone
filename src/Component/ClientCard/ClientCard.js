import React from 'react';
import classes from './ClientCard.module.css';
import "font-awesome/css/font-awesome.min.css";

const ClientCard = (props) => {

    var stars =[];

    for(var i=1;i<=5;i++){
        if(i<= props.stars){
            stars.push(<i
                style={{ padding: "2px",color: "#FFC82A" }}
                className="fa fa-star"
                aria-hidden="true"
                key={i}
              ></i>);
        }else{
            stars.push(<i
                style={{ padding: "2px",color: "lightgray" }}
                className="fa fa-star"
                aria-hidden="true"
                key={i}
              ></i>);
        }
    }

    var clientCard = [];
    var cardImg;
    if(props.slide === 2){
        clientCard.push(classes.rightclientCard);
        clientCard.push(classes.rightSlide);
        cardImg = classes.rightcardImg;
    }else if(props.slide === 1){
        clientCard.push(classes.midclientCard);
        clientCard.push(classes.midSlide);
        cardImg = classes.midcardImg;
    }else {
        clientCard.push(classes.leftclientCard);
        clientCard.push(classes.leftSlide);
        cardImg = classes.leftcardImg;
    }
    clientCard = clientCard.join(' ');

    return (
        <div className={clientCard}>
            <img src={props.userImg} className={cardImg} alt="UserImg"/>
            <div className={classes.cardUser}>
            <div className={classes.cardUsername}>{props.user}</div>{props.designation}<br/>
                {stars}
            </div>
            <div className={classes.cardContent}>
                {props.content}
            </div>
        </div>
    );
}

export default ClientCard;