import React from 'react'
import { Card } from 'antd';
import './Card2.css';

function Card2(props) {
    return (
        <div>
                <Card loading={props.loading}  style={{ width: 300 ,marginLeft:'475px',fontSize:'25px',backgroundColor:`${props.color1}` ,fontFamily:`${props.font}`}} >
                         <p className="header1">{props.type}</p>
                             <p className="header2">{props.question}</p>
                             <p className="header3">{props.answer}</p>
    </Card>
        </div>
    )
}

export default Card2
