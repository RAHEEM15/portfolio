import React from "react";

export default class ArrayStateExample extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={Contend:["c", "c++", "java", "python", "js", "html", "css"]}
    }
    render()
        {
            return(
                <>
                <h2>Array State Example - list using map method</h2>


                <ul>
                    {
                        this.state.Contend.map(items =>(
                            <li key={items}>{items}</li>
                        ))
                    }
                </ul>
                </>
            )
        }
}