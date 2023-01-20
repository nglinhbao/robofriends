import React from "react";
import Card from "./card";

const CardList = ({ robots }) => {
    const cardArray = robots.map((user, i) => {
        return <Card key= {i} id={user.id} name={user.name} email={user.email} />
    })
    return (
        <div>
            { cardArray }
        </div>
    )
}

export default CardList;