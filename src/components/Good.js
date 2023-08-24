// import React from 'react'

// function Good (){
//     return <h1> 
//             hello degual  this is the functional components
//     </h1>
// }


// const Good = () =>   <h1>Welcome</h1>

// USING PROPS WITH FUNCTIONAL COMPONENT

const Good = (props) => {
    return(
        <div>
            <h1>Welcome {props.name} A.K.A {props.heroName}</h1>
        </div>
    )
}



export default Good