import React from "react";

export default class Stateclasscomponent extends React.Component
{
    Constructor(props)
    {
        Super(props)
        This.state={display:"welcome to credo system"}
    }
    render()
    {
        return(
            <>
                <h1>state - state class component</h1>
                <h1>state value - {This.State.display}</h1>
            </>
        )
    }
}