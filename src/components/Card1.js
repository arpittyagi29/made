import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
class Card1 extends Component {
    render() {
        const {type1,question1,answer1,color1,font} = this.props
        return (
            <div>
                <Card style={{ width: 300 ,marginLeft:'475px',fontSize:'25px',backgroundColor:`${color1}` ,fontFamily:`${font}`}}>
    <div>
                       <div>
                         <h5>{type1}</h5>
                         <div>
                           <div>
                             <h6>{question1}</h6>
                           </div>
                           <div>
                           </div>
                           <div>
                             <h6>{answer1}</h6>
                           </div>
                         </div>
                       </div>
                     </div>
    </Card>
            </div>
        )
    }
}

export default Card1
