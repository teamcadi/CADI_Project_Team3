import styled from 'styled-components'
import React from 'react'

const CardComponent = styled.img`
width : 200px;    
height : 300px;
src : '../../img/disney1.jpg' ;
border : 1px solid black;
`


const Card2 = styled.div`
width: 230px;
height: 380px;
text-align: center;

border: 3px dashed red;
background-color: orchid;
position: absolute;
top: 200px;
left: 100px;
z-index: 8;
opacity: 0.5;
transform: rotate(8deg );
border-radius : 10px;
`

const Card3 = styled.div`
width: 230px;
height: 380px;
text-align: center;

border: 3px dashed hotpink;
background-color: mediumspringgreen;
position: absolute;
top: 300px;
left: 400px;
z-index: 5;
opacity: 0.5;
transform: rotate( -8deg );
border-radius : 10px;
`
const Card4 = styled.div`
width: 13.75rem;
height: 17.5rem;
text-align: center;
border: 3px dashed hotpink;
background-color: blue;
position: absolute;
top: 8.125rem;
left: 36.25rem;
z-index: 7;
opacity: 0.5;
transform: rotate( -10deg );
border-radius : 10px;
`

const Card5 = styled.div`
width: 230px;
height: 380px;
text-align: center;

border: 3px dashed hotpink;
background-color: orange;
position: absolute;
top: 300px;
left: 700px;
z-index: 7;
opacity: 0.5;
transform: rotate( 8deg );
border-radius : 10px;
`
const Cards = () => {

    return (
        <>
            <Card2>Card 2</Card2>
            <Card3>Card 3</Card3>
            <Card4>Card 4</Card4>
            <Card5>Card 5</Card5>
        </>
    )
}




export default Cards;