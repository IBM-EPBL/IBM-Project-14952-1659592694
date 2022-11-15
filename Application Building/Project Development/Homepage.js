import { ArrowUpward } from "@material-ui/icons";
import React from "react";
import HalfSlider from "./slider";
import {Link } from 'react-router-dom'
// HalfSlider
const Homepage=()=>{
    const data=[{
        title:'Affected people',
        content:'80,00,000',
        icon:<ArrowUpward/>,
    },
{
    title:'Death Rate',
    content:'134%',
    icon:<ArrowUpward/>
},
{
    title:'World Wide',
    content:'7 in 57',
    icon:<ArrowUpward/>
},
{
    title:'Growing Causes',
    content:'50 in 200',
    icon:<ArrowUpward/>
}
]
    return (
        <div >
            <HalfSlider />
            <marquee>
            <p style={{fontWeight:500,fontSize:'20px',margin:'10px'}}> The data collected from World Health organizations is given below:</p>

            </marquee>
                        <div className="display-cards">

            <br/>
            
            <br/>

            {data.map(x=>{
                return (
                    <div className="info-card" key={x.title}>
                        <h1 >{x.title}</h1>
                        <h3 style={{padding:'8px',textAlign:'center'}}>{x.content} &nbsp; {x.icon}</h3>
                        
                        </div>
                )
            })}
        </div>
        <div style={{textAlign:'center'}}>
        <Link to="/form" style={{textAlign:'center',fontSize:'18px',fontWeight:500,
    margin:'10px',color:'brown',textDecoration:'none'}}>Click Here to check your health</Link>

        </div>
        </div>
    )
}
export default Homepage;
// 0 5px 10px rgb(0 0 0 / 10%)