import React from "react";
function randomnamechange(){

    function change(){
        const name=["raheem","mani","jahir"]
        const int= Math.floor(Math.random()*3)
        return name[int]
    }
    return(
        <div>
            <h2>Hello {change()}</h2>
        </div>
    );
}

export default randomnamechange;