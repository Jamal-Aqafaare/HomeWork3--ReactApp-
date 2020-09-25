import React,{useState, useEffect} from "react"
import { render } from "@testing-library/react"

export function First(){
    const [name, setName] = useState("Default")
    const [age,setAge] = useState(0)
    useEffect(()=>{

    },[age])
        return(
            <div>
                {name}
            </div>
        )
}

export class second extends React.Component{
    state={
        name: "Jamal",
        age: '40',
        height: 150,
        
    }
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    render(){
        return(
            <div>

            </div>
        )
    }
}