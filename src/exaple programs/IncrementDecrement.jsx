import React from "react";

export default class IncrementDecrement extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={count:0}

    }
    Increment()
    {
        this.setState({count:this.state.count+1})
    }

    Decrement()
    {
        this.setState({count:this.state.count-1})
    }

    Reset()
    {
        this.setState({count:0})
    }
    render()
    {
        return(
            <>
            <h1>Counter App</h1>
            <h1>Count Value - {this.state.count}</h1>

            <p>
                <button onClick={()=>this.Decrement()}>-</button>
                <button onClick={()=>this.Reset()}>Reset</button>
                <button onClick={()=>this.Increment()}>+</button>
            </p>
            </>
        )
    }
}