import React from "react";

export default class IncrementDecrement extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={count:0}

    }
    increment()
    {
        this.setstate({count:this.state.count+1})
    }

    decrement()
    {
        this.setstate({count:this.state.count-1})
    }

    Reset()
    {
        this.setstate({count:this.state.count=0})
    }
    render()
    {
        return(
            <>
            <h1>Counter App</h1>
            <h1>Count Value - {this.state.count}</h1>

            <p>
                <button onClick={()=>this.decrement}>-</button>
                <button onClick={()=>this.Reset}>Reset</button>
                <button onClick={()=>this.increment}>+</button>
            </p>
            </>
        )
    }
}