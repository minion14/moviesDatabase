import React from "react";
import Card from "./card";
// import { movies } from "./details";

const Cardlist = ({movies}) => {
    const cardComponent = movies.map((user,i) =>{
        return <Card  id={movies[i].id} name={movies[i].name }
        description={movies[i].description} url={movies[i].url}
        key={`${movies[i].id}`}
        ></Card>
    });
    return cardComponent;
}
export default Cardlist;