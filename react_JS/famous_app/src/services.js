import React , {Component} from "react"
class Services extends Component{
    render(){
        return(
            <div style={{color:'lightblue',backgroundColor:'green'}}>
                <h1>This is services Page with class {this.props.name}</h1>
            </div>
        )
    }
}
export default Services