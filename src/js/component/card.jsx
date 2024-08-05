// importa react
import React from "react";
// crear componente
const Card = (props)=>{
    console.log(props)
    return(
        <div className="card" style={{width: "18rem", backgroundColor: '#EEE'}} >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.user}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-primary">Likes {props.likes}</a>
            </div>
        </div>
    )
}
// exportar componnete
export default Card
// importar componente
// utilizar