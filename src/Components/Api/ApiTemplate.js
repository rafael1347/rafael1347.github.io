import Card from '../ui/Card';
import React, { useState } from 'react';
import "./ApiTemplate.css"
const ApiTemplate = (props) => {
    const [flipped,setFlipped] = useState(false);
    function handleClick(e) {
        e.preventDefault();
        console.log("true");
        {flipped ? setFlipped(false) :
        setFlipped(true) }
    }


    return ( 
        <Card>
            <div>
        <div>
        <img className="image" src={"https://image.tmdb.org/t/p/original/" + props.responseObj.poster_path} alt={props.responseObj.title} />
        </div>
        <div className="content">
        <h1>Movie Title: {props.responseObj.title}</h1>
        <h2>Vote average: {props.responseObj.vote_average}</h2>
        <p>Overview: {props.responseObj.overview}</p>
        </div>
        <div className="actions">
        <button>To Favorites</button>
        <button onClick={handleClick}>Streaming</button>
      </div>
      <div >
        {flipped ? <h3>{props.streaming.link}</h3> : "not clicked"}
      </div>
      </div>
        </Card>
     );
}
 
export default ApiTemplate;