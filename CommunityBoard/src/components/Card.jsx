import React from "react";

const Card = (props) => {
    return(
        <div className="card">
            <img src={props.img} alt={props.title} />
            <h2 className='restName'>{props.title}</h2>
            <p>{props.description}</p>
            <a></a>
        </div>
    );
}
export default Card;