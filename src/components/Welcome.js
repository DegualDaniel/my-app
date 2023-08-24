import React, {Component} from "react"

// class Welcome extends Component {
//     render(){
//         return <h1>
//             Hello</h1>
//     }
// }

// USING PROPS WITH CLASS COMPONENTS

class Welcome extends Component { 
    render(){
        return(
            <div> 
                <h1>Hello {this.props.name} A.K.A {this.props.heroName}</h1>
            </div>
        )
    }
}



 


export default Welcome












